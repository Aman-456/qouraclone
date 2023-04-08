import { List, ListItem, Button, Box, Text, Image } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const App = ({ friends, pending, request, id }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {

        const getList = async (id) => {
            //get this users friends list logic
        }
        const getrequestList = async (id) => {
            //get this users requests list logic
        }
        const getpendingList = async (id) => {
            //get this users pending list logic
        }


    }, [request, pending, friends, id]);


    return (
        <Box>

            {
                data?.map((e, i) => <List key={i} spacing={3} w="100%">
                    <ListItem className="userItem" >
                        <Image
                            className="Avatart  profile"
                            src={undefined}
                            fallback
                            h="70px"
                            w={"50px"}
                            borderRadius="xl"
                            objectFit={"cover"}
                        />
                        <span
                            onClick={() => navigate(`/user/${e._id}`)}>
                            {e.name}
                        </span>


                        {
                            (pending && !friends && !request) &&
                            <Box
                                marginTop={'5px'}
                                marginLeft="auto"
                                display={"flex"}
                                gap={".5rem"}>
                                <Button
                                    color={"white"}
                                    background={"var(--primary)"}>
                                    Pending Request
                                </Button>
                            </Box>
                        }

                    </ListItem>
                </List>
                )
            }
            {
                data?.length === 0 &&
                <Text
                    minH={"200px"}
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"center"}>
                    Nothing to show here
                </Text>
            }
        </Box>

    );
};

export default App;