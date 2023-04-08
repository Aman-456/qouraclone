
import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Image, List, ListItem, Stack, Text } from '@chakra-ui/react';
import FORUM from '../../../../common/Forum';
import { posts } from '../../../../common/data';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../../../Store/Features/posts';


function Search() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const postslist = useSelector(state => state.post.posts)
    const [users, setusers] = useState([])
    const get = async () => {
        // get query from server
        setusers([])
        dispatch(setPosts(posts))

    }
    useEffect(() => {
        get()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // const empty = data?.users?.length === 0 && data?.posts?.length === 0
    const empty = users.length === 0 && postslist.length === 0
    return (
        <Fragment>

            {
                empty ?
                    <Box textAlign="center" mt={"50px"} minH={'40vh'} px={6}>
                        <Heading
                            display="inline-block"
                            as="h2"
                            size="2xl"
                            bg={'var(--primary)'}
                            backgroundClip="text">
                            403
                        </Heading>
                        <Text fontSize="18px" mb={2}>
                            Results Not Found
                        </Text>
                        <Text color={'gray.500'} >
                            The Results you're looking for does not seem to exist
                        </Text>
                    </Box>
                    :
                    <Box minH={'50vh'} py="10px" w={"100%"}>
                        {
                            <FORUM
                                posts={posts}
                                onlyFeed
                            />
                        }
                        {
                            <List
                                margin={"auto"}
                                spacing={2}
                                mt="15px"
                                w="100%">

                                {
                                    users?.users?.map((e, i) =>
                                        <ListItem
                                            background="var(--lightGrey)"
                                            rounded="10px"
                                            shadow='md'
                                            onClick={() => navigate(`/user/${e._id}`)}
                                            gap="20px"
                                            key={i}
                                            padding={"10px"}
                                            className="userItem" >
                                            <Image
                                                className="Avatart  profile"
                                                src={undefined}
                                                h="70px"
                                                w={"50px"}
                                                borderRadius="xl"
                                                objectFit={"cover"}
                                            />
                                            <Stack>
                                                <span> {e.name} </span>

                                                <Text mt={"15px"} fontWeight={"400"}> {e?.bio} </Text>
                                            </Stack>
                                        </ListItem>
                                    )
                                }

                            </List>

                        }
                    </Box>
            }
        </Fragment>
    )
}
export default Search