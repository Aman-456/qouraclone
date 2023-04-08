import React, { useState, useEffect, Fragment, useRef } from "react";
import { FaUserEdit } from "react-icons/fa"
import { MdCloudDone } from "react-icons/md"
import { GiCancel } from "react-icons/gi"
import UserList from "./userList"
import QuestionList from "./QuestionList"
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack
} from "@chakra-ui/react";

function Main() {
  const [profile, setprofile] = useState({
    bio: "Profile user description will be here"
  })
  const [input, setinput] = useState("");
  const [editprofile, seteditprofile] = useState(false)
  const [file, setfile] = useState()
  const [loading, setloading] = useState(profile?.profile ? true : false)
  const [userList, setuserList] = useState([])
  const ref = useRef()
  useEffect(() => {
    if (editprofile) {
      ref.current.focus();
    }

  }, [editprofile])
  // friendlist

  const update = async () => {
    //  updat 
  }
  const updateprofile = async () => {
    // update profile logic
  }

  const edit = async () => seteditprofile(e => !e)
  const deleteuser = async () => {
    // delete profile logic
  }

  const API = ""
  return (
    <Box w={"100%"} className={`profilecontainer`} >
      <VStack
        textAlign={"center"}
        spacing={"6"}
        w={"100%"}>
        <Box position={"relative"}>
          <Image
            boxSize={"sm"}
            borderRadius="full"
            objectFit={"cover"}
            h={"200px"}
            w="200px"
            shadow={"xl"}
            className="profile"
            src={file ? URL.createObjectURL(file) : (API + "/" + profile?.profile)}
            fallbackSrc='https://via.placeholder.com/150'
            alt="profile"
            onLoad={() => { setloading(false); console.log(file); }}
          />

          <Flex justifyContent={"center"} gap="10px" mt={"10px"}>
            {
              !file &&
              <label htmlFor="file" className="btn">
                <FaUserEdit />
              </label>

            }
            {
              file &&
              <button className="btn" onClick={updateprofile}>
                <MdCloudDone />
              </button>
            }
            {
              file &&
              <button onClick={e => setfile(null)} className="btn">
                <GiCancel />
              </button>
            }


          </Flex>

          <Input
            id="file"
            type={"file"}
            className="btn"
            position={"absolute"}
            bottom="0px"
            left={"80%"}
            color={"white"}
            background="var(--primary)"
            padding={"0"}
            h="25px"
            w={"60px"}
            rounded="xl"
            display={"none"}
            onChange={e => setfile(e.currentTarget.files[0])}>
          </Input>

        </Box>



        <VStack
          userSelect={"none"}
          spacing={1}>
          <Heading as={"h4"} >{profile ? profile.name : "name"}</Heading>
          <Text fontSize={19}>
            {profile ? profile.email : "email"}
          </Text>
          <Text fontSize={19}>
            {profile?.friends?.length === 0 && " 0 Connections"}
            {profile?.friends?.length === 1 && " 1 Connection"}
            {profile?.friends?.length > 1 && profile?.friends?.length + "  Connections"}
          </Text>

        </VStack>
        <Box>
          <Button
            onClick={deleteuser}
            color={"white"}
            background={"var(--red)"}>
            Delete Account
          </Button>
        </Box>
      </VStack>
      <div className={`containTwo`}>
        <Box>
          {
            profile.bio !== "" &&
            <Fragment>
              {
                !editprofile ?
                  <Box
                    shadow={'sm'}
                    className={'BioDiv'}>
                    <p
                      style={{ color: "black", margin: "0" }}>
                      {profile?.bio}
                    </p>
                    <button
                      className="btn"
                      style={{ marginLeft: "auto" }}
                      onClick={edit}>
                      <FaUserEdit />
                    </button>
                  </Box>
                  :
                  <Box
                    shadow={"sm"}
                    className={'BioDiv'}>
                    <input
                      ref={ref}
                      style={{ color: "black" }}
                      placeholder="Write Desciption About Yourself"
                      value={input}
                      onChange={e => setinput(e.target.value)}
                    />
                    <div style={{ display: "flex", gap: ".5rem" }}>
                      <button className="btn" onClick={update}>
                        <MdCloudDone />
                      </button>
                      <button className="btn" onClick={edit}>
                        <GiCancel />
                      </button>
                    </div>
                  </Box>
              }
            </Fragment>
          }
        </Box>
        <Tabs
          isManual
          isLazy
          variant="soft-rounded"
          colorScheme='linkedin'>
          <TabList
            borderRadius={"6px"}
            defaultChecked={1}
            shadow={"sm"}
            padding={"10px"}

            overflowX="scroll"
            background="white">
            <Tab>Questions</Tab>
            <Tab>Answers</Tab>
            <Tab>Saved</Tab>
            <Tab>Friends</Tab>
            <Tab>Requests</Tab>
            <Tab>Pending</Tab>
          </TabList>
          <TabPanels
            maxH={"400px"}
            minH="150px"
            overflowY="scroll"
            background={'#ECF0F1'}
            shadow="md"
            borderRadius={"lg"}
            mt={"20px"}>
            <TabPanel>
              <QuestionList query={"question"} />
            </TabPanel>
            <TabPanel>
              <QuestionList query={"answer"} />
            </TabPanel>
            <TabPanel>
              <QuestionList query={"saved"} />
            </TabPanel>
            <TabPanel>
              <UserList
                userList={userList}
                setuserList={setuserList}
                setprofile={setprofile}
                friends
                pending={null}
                request={null}
              />
            </TabPanel>
            <TabPanel>
              <UserList
                userList={userList}
                setuserList={setuserList}
                setprofile={setprofile}
                friends={null}
                pending={null}
                request
              />
            </TabPanel>
            <TabPanel>
              <UserList
                userList={userList}
                setuserList={setuserList}
                setprofile={setprofile}
                friends={null}
                pending
                request={null}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

    </Box >
  );
}

export default Main;


