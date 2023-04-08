import UserList from "./profileComponents/userList"
import QuestionList from "./profileComponents/QuestionList"

import {
  Box,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack
} from "@chakra-ui/react";


function OtherUserProfile() {
  const profile = {}

  const AddFriend = async () => {
    //  add friend logic
  }
  const CancelRequest = async () => {
    //  cancel friend request friend logic
  }
  const Removefriend = async () => {
    //  add this user as friend logic
  }


  return (
    <div className={'profilecontainer'}>
      <VStack
        textAlign={"center"}
        spacing={"6"}
        w={"100%"}>
        <Box>
          <Image
            boxSize={"sm"}
            borderRadius="full"
            objectFit={"cover"}
            h={"200px"}
            w="200px"
            shadow={"xl"}
            className="profile"
            src={undefined}
            fallbackSrc='https://via.placeholder.com/150'
            alt="profile"
          />
        </Box>

        <VStack
          userSelect={"none"}
          spacing={1}>
          <Heading as={"h4"} >{profile ? profile?.name : "name"}</Heading>
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

          <button
            className="btn"
            style={{ padding: "4px 18px" }}
            onClick={AddFriend}>
            Add Friend
          </button>

        </Box>
      </VStack>
      <div className={`containTwo`}>
        <Box>


          <Box
            shadow={'sm'}
            className={'BioDiv'}>
            <p
              style={{ color: "black", margin: "0" }}>
              {profile?.bio || "viewer's description"}
            </p>

          </Box>


        </Box>
        <Tabs
          isManual
          isLazy
          defaultChecked={1}
          variant="soft-rounded"
          overflowX="scroll"
          colorScheme='linkedin'>
          <TabList
            borderRadius={"6px"}
            shadow={"sm"}
            padding={"10px"}
            background="white">
            <Tab>Questions</Tab>
            <Tab>Answers</Tab>
            <Tab>Saved</Tab>
            <Tab>Friends</Tab>
          </TabList>
          <TabPanels

            background={'#ECF0F1'}
            shadow="md"
            borderRadius={"lg"}
            mt={"20px"}>
            <TabPanel>
              <QuestionList id={profile?._id} query={"question"} />
            </TabPanel>
            <TabPanel>
              <QuestionList id={profile?._id} query={"answer"} />
            </TabPanel>
            <TabPanel>
              <UserList
                id={profile?._id}
                friends
                pending={null}
                request={null}
              />
            </TabPanel>

          </TabPanels>
        </Tabs>
      </div>

    </div >
  );
}

export default OtherUserProfile;


