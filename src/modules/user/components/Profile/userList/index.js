/* eslint-disable react-hooks/exhaustive-deps */
import { List, ListItem, Button, Box, Image } from "@chakra-ui/react"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'



const App = ({ friends, pending, request, userList }) => {
    const navigate = useNavigate()
    const getList = async (id) => {
        // get friends list logic
    }
    const accept = async (acceptid) => {
        //    accept friend request logic
    }
    const remove = async (removeId) => {
        //    remove friend request logic
    }

    useEffect(() => { getList() }, [])

    return (
        <Box>
            {
                userList?.map((e, i) => <List key={i} spacing={3} w="100%">
                    <ListItem className="userItem" >
                        <Image
                            className="Avatart  profile"
                            src={undefined}
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
                            (request && !friends && !pending) &&
                            <Box
                                marginTop={'5px'}
                                marginLeft="auto"
                                display={"flex"}
                                gap={".5rem"}>
                                <Button
                                    onClick={() => accept(e?._id)}
                                    color={"white"}
                                    background={"var(--primary)"}>
                                    accept
                                </Button>
                                <Button
                                    onClick={() => remove(e?._id)}
                                    color={"white"}
                                    background={"var(--red)"}>
                                    reject
                                </Button>
                            </Box>
                        }
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
                        {
                            (!pending && !request && friends) &&
                            <Box
                                marginTop={'5px'}
                                marginLeft="auto"
                                display={"flex"}
                                gap={".5rem"}>
                                <Button
                                    onClick={() => remove(e?._id)}
                                    color={"white"}
                                    background={"var(--primary)"}>
                                    Remove Friend
                                </Button>
                            </Box>
                        }
                    </ListItem>
                </List>
                )
            }
            {
                userList?.length === 0 &&
                <Box
                    display={"flex"}
                    flexDirection="column"
                    alignItems={"center"}
                    gap="1rem"
                    minH={"200px"}>
                    <img
                        style={{ margin: "0 auto" }}
                        src={"/images/undraw.svg"} alt="img" width='150px' height='150px'></img>
                </Box>
            }
        </Box>

    );
};

export default App;