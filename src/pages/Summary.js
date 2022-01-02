import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  TabList,
  Tabs,
  TabPanel,
  Tab,
  TabPanels,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Link, useHistory, useLocation } from "react-router-dom";
import { Progress } from '@chakra-ui/react'
import Transcript from ".././components/Transcript";
import Actions from "../components/Actions";
import Questions from "../components/Questions";
require('dotenv').config()

const SYMBL_APP_ID = process.env.REACT_APP_SYMBL_APP_ID
const SYMBL_APP_SECRET = process.env.REACT_APP_SYMBL_APP_SECRET

function useInterval(callback, delay, stopFlag, setIntervalId) {
  const savedCallback = useRef()
  //Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    let id
    function tick() {
      savedCallback.current()
      if (stopFlag) {
        clearInterval(id)
      }
    }
    if (delay !== null && !stopFlag) {
      id = setInterval(tick, delay)
      setIntervalId(id)
      return () => {
        clearInterval(id)
      }
    }
  })

}

async function loginToSymbl({ SYMBL_APP_SECRET, SYMBL_APP_ID }) {
  const response = await fetch('https://api.symbl.ai/oauth2/token:generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      type: 'application',
      appId: SYMBL_APP_ID,
      appSecret: SYMBL_APP_SECRET,
    }),
  })
  const json = await response.json()
  return json.accessToken
}

const Summary = () => {
  const [file, setFile] = useState('')
  const [videoSrc, setVideoSrc] = useState('')
  const [conversationId, setConversationId] = useState(null)
  const [jobId, setJobId] = useState(null)
  const [status, setStatus] = useState('not started')
  const [messages, setMessages] = useState([])
  const [token, setToken] = useState(null)
  const [intervalId, setIntervalId] = useState(null)
  const history = useHistory()
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!location.state) history.push("/dashboard")
    if (location?.state?.detail) {
      const tempFile = (location.state.detail)
      console.log(tempFile)
      loginToSymbl({ SYMBL_APP_ID, SYMBL_APP_SECRET }).then((data) => {
        setToken(data);
        const src = URL.createObjectURL(new Blob([file], { type: 'video/mp4' }))
        setFile(tempFile)
        setVideoSrc(src);
      })
    }
    return () => {
      for (var i = 1; i < 99999; i++)
        window.clearInterval(i);

    }
  }, [])

  useEffect(() => {
    if (file && token)
      submitFileForProcessing(file)
  }, [file])

  useEffect(() => {
    if (status === 'completed') {
      getTranscripts()
    }
  }, [status])

  useInterval(
    () => {
      fetch(`https://api.symbl.ai/v1/job/${jobId}`, {
        method: 'GET',
        headers: {
          'x-api-key': token,
        },
      })
        .then((rawResult) => rawResult.json())
        .then((result) => setStatus(result.status))
    },
    1000,
    status === 'completed' || (status !== 'not_started' && !jobId),
    setIntervalId
  )
  const getTranscripts = () => {
    fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {
        'x-api-key': token,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then((rawResult) => rawResult.json())
      .then((result) => {
        setMessages(result.messages)
        console.log(result)
        setLoading(false)
      })
  }

  const submitFileForProcessing = (file) => {
    fetch('https://api.symbl.ai/v1/process/video', {
      method: 'POST',
      headers: {
        'x-api-key': token,
        'Content-Type': 'video/mp4',
      },
      body: file,
      json: true,
    })
      .then((rawResult) => rawResult.json())
      .then((result) => {
        console.log(result)
        setConversationId(result.conversationId)
        setJobId(result.jobId)
        setStatus('in_progress')
      })
  }



  return (
    <>
      {loading ?
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "calc(100vh - 150px)", flexDirection: "column" }}>
          <CircularProgress isIndeterminate color='green.300' />
          <h5>Loading</h5>
        </div> :
        <Box p={"65px"}>
          <HStack
            alignContent={"center"}
            justifyContent={"space-between"}
            spacing={4}
          >
            <HStack spacing={4}>
              <Link to="/Lectures">
                <ArrowBackIcon w={8} h={8} />
              </Link>

              <Heading>{file?.name?.split(".")[0]}</Heading>
            </HStack>
          </HStack>
          <Box my={10}>
            <Tabs isManual variant="enclosed" size="lg">
              <TabList>
                <Tab _selected={{ color: "white", bg: "black" }} px={8}>
                  Transcript
                </Tab>

              </TabList>
              <TabPanels>
                <TabPanel>
                  <Transcript messages={messages} />
                </TabPanel>


              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      }
    </>
  );
};

export default Summary;
