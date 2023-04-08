import { Avatar, Box, Button, Heading, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react"
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import {
    AiOutlinePushpin,
} from "react-icons/ai"


import moment from 'moment';
import COMMENTS from "./Comments"
import CommentForm from "./CommentForm"



import { ArrowDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import EditModal from "./EditModal"
import { useDispatch, useSelector } from "react-redux";
import { questiondetails } from "../../../../common/data";
import { setPostdata } from "../../../../Store/Features/posts";

function QuestionWrapper() {
    const dispatch = useDispatch();
    dispatch(setPostdata(questiondetails))
    const data = useSelector(state => state.post.postdata)



    const [loading, setloading] = useState(false)
    const [Body, setBody] = useState('')
    const id = data?._id
    const [isCommentOpen, setisCommentOpen] = useState(data?._id)
    const [editoropen, seteditoropen] = useState(false)
    const [editQuestion, seteditQuestion] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setisCommentOpen(data?._id)
    }, [data?._id])


    const postcomment = async (e, id, reply) => {
        //   comment login
    }

    const voting = async (status) => {
        //    voting logic
    }
    const savequestion = async () => {
        //   bookmark question logic
    }

    const removesavequestion = async () => {
        // remove bookmark logic
    }
    const deleteit = (e) => {
        //    delete question logic
    }

    useEffect(() => {
        return () => {
            setBody(null)
            setloading(null)
            setloading(null)
            seteditoropen(null)
        }
    }, [])

    let commentcount = 0;
    data?.Comments?.forEach(e => {
        commentcount++;
        e?.reply?.map(e => commentcount++)
    })
    return (
        <Stack
            shadow={"md"}
            padding={"25px 30px"}
            rounded={"lg"}
            spacing="10"
            background={"white"}
        >
            <Box>
                <Heading
                    fontFamily={"Poppins"}
                    mb="5"
                    display={"flex"}
                    alignItems="flex-start"
                    wrap="wrap"
                    justifyContent={"space-between"}
                    size={"lg"}>
                    {data?.Title}

                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            ml={"10px"}
                            icon={<HamburgerIcon />}
                        />
                        <MenuList >
                            <MenuItem
                                onClick={() => seteditQuestion(true)}
                                fontSize={"16px"}>
                                Edit Post
                            </MenuItem>

                            <MenuItem
                                onClick={() => deleteit()}
                                fontSize={"16px"}>
                                Delete Post
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    {
                        editQuestion &&
                        <EditModal
                            status={"Post"}
                            editquestion
                            open={editQuestion}
                            setOpen={seteditQuestion}
                            data={data}
                        />
                    }

                </Heading>
                <Text dangerouslySetInnerHTML={{ __html: data?.Body }} />
                {
                    data?.Tags &&
                    <HStack mt={"20px"} gap="2px" wrap={"wrap"}>
                        {
                            data?.Tags?.map((e, i) => {
                                return (
                                    <Box
                                        margin={"0"}
                                        background={"var(--red)"}
                                        color="white"
                                        padding={"5px 15px"}
                                        rounded="15px"
                                        key={i}
                                        fontSize="14px"
                                    >
                                        {e}
                                    </Box>
                                )
                            })
                        }




                    </HStack>
                }
                <Box
                    mt={"20px"}
                    className={'QuestionDetailsRL'}>
                    <div>
                        <Box
                            onClick={
                                data?.saved?._id ?
                                    removesavequestion :
                                    savequestion
                            }
                            className={'icondiv'}
                            background={data?.saved?._id ? "var(--red)" : "ButtonShadow"}
                            color={data?.saved?._id ? "white" : undefined}
                        >
                            <AiOutlinePushpin />
                        </Box>
                        <Box
                            background={"ButtonShadow"}
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/user/${123}`)}
                            className={`icondiv user `}>
                            <Avatar
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                                src={undefined}

                            />
                            {data?.Author?.name || " Test name"}

                        </Box>


                    </div>
                    <Box
                        background={"ButtonShadow"}
                        className={`icondiv mleft`}>
                        {moment(data?.createdAt).fromNow()}
                    </Box>
                </Box>

            </Box>

            {/* comments and likes counter */}
            <HStack
                padding={"8px 10px"}
                rounded={"sm"}
                borderTop="2px solid ButtonShadow"
                borderBottom="2px solid ButtonShadow"
                spacing={"10"}
                mt={"30px !important"}
            >
                <HStack>
                    <Image
                        h={"20px"}
                        mt="5px"
                        alt=""
                        src={"/images/icons/like.png"} />
                    <Text style={{ userSelect: "none", marginLeft: "10px" }}>
                        {data?.Likes?.count || 0}
                    </Text>

                </HStack>
                <HStack >
                    <Image
                        h={"20px"}
                        mt="5px"
                        alt=""
                        src={"/images/icons/comment.png"} />
                    <Text style={{ userSelect: "none", marginLeft: "5px" }}>
                        {data?.Likes ? commentcount : '0'}
                    </Text>
                </HStack>
            </HStack>


            {/* comment and like box */}
            <Box
                mb={"10px !important"}
                mt={"20px !important"}>

                {/* likes */}
                <HStack
                    spacing={"5"}
                    justify={"center"}>


                    <Fragment>

                        <Button
                            className={'left'}
                            onClick={e => voting("like")}>
                            Upvote
                            <ArrowDownIcon
                                style={{
                                    marginLeft: "10px",
                                }}
                            />
                        </Button>

                        <Button
                            background={"var(--red)"}
                            color="white"
                            className={'left'}
                            onClick={e => voting("unlike")}>
                            Downvote
                            <ArrowDownIcon
                                style={{
                                    marginLeft: "10px",
                                }}
                            />
                        </Button>

                    </Fragment>

                    <Button
                        className={'left'}
                        color={isCommentOpen === data?._id ? "blue.500" : "black"}
                        onClick={() => setisCommentOpen(a => data?._id === a ? "" : data?._id)}>
                        Toggle  Comments
                    </Button>
                </HStack>

                {/* comments */}
                <Fragment>
                    {/* comment editor */}
                    {
                        (isCommentOpen === data?._id && editoropen) &&
                        <Box
                            ml={"auto !important"}
                            maxW="100%"
                            w={"100%"}>
                            <CommentForm
                                onFinish={postcomment}
                                setvalues={setBody}
                                values={Body}
                                id={id}
                                loading={loading}
                                seteditoropen={seteditoropen}
                            />
                        </Box>
                    }

                    {/* comment Component Called */}
                    {
                        (!editoropen && isCommentOpen) &&
                        <Button
                            mt={"20px"}
                            marginLeft={'1%'}
                            onClick={() => seteditoropen(true)}
                            color='blue.400'>
                            Add response
                        </Button>
                    }

                </Fragment>

                {
                    isCommentOpen &&
                    <COMMENTS
                        onFinish={postcomment}
                        loading={loading}
                        data={data?.Comments}
                        seteditoropen={seteditoropen}
                    />
                }
            </Box>

        </Stack >
    )
}

export default QuestionWrapper

