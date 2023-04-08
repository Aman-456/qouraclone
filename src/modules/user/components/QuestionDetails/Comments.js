
import { Avatar, Box, Button, Container, HStack, Image, Stack, Text } from "@chakra-ui/react"
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import moment from 'moment';
import CommentForm from "./CommentForm"
import EditModal from "./EditModal"

function Comments({
    data,
    onFinish,
    loading,

}) {

    const navigate = useNavigate()
    const [Body, setBody] = useState('')
    const [edit, setEdit] = useState(false)
    const [editoropen, seteditoropen] = useState(false)
    const [isreplyopen, setisreplyopen] = useState(false)

    const deleteit = async (e) => {
        //    delete commetn logic
    }
    useEffect(() => {
        setBody(null)
        setEdit(null)
        setisreplyopen(null)
        seteditoropen(null)
    }, [])
    return (
        data?.map((e, i) =>
            <Container
                transition={"all .3s ease-in-out"}
                border={"1px solid var(--lightGrey)"}
                paddingLeft="10px"
                padding="0"
                borderRadius={"5px"}
                m={"10px 0 0 auto !important"}
                maxW={"99%"}
                position="relative"
                key={i} >
                <Stack
                    borderRadius={"5px"}
                    shadow={"md"}
                    padding={"10px 20px 10px 20px"}
                    spacing="5"
                    background={"white"}
                >
                    <Box>
                        <Text dangerouslySetInnerHTML={{ __html: e?.Body }} />
                        <Box
                            mt={"20px"}
                            className={'QuestionDetailsRL'}>
                            <div>
                                <Box
                                    background={"var(--lightGrey)"}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/user/${123}`)}
                                    className={`icondiv user`}>
                                    {/* <UserOutlined /> */}
                                    <Avatar
                                        style={{
                                            width: "22px",
                                            height: "22px",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                        src={undefined}
                                    />
                                    {e?.Author?.name}
                                </Box>


                            </div>
                            <Box
                                background={"var(--lightGrey)"}
                                className={`icondiv mleft`}>
                                {moment(e?.createdAt).fromNow()}
                            </Box>
                        </Box>
                    </Box>



                    <HStack

                        borderTop={"2px solid var(--lightGrey)"}
                        justifyContent={"center"}
                        pt="10px">

                        {
                            e?.reply &&
                            <Button
                                color={isreplyopen === e?._id ? "blue.500" : "black"}
                                onClick={() => setisreplyopen(a => e?._id === a ? "" : e?._id)}>
                                {
                                    e?.reply?.length === 0 && " Add reply"
                                }
                                {
                                    e?.reply?.length === 1 && " Toggle 1 reply"
                                }
                                {
                                    e?.reply?.length > 1 && " Toggle " + e?.reply?.length + " replies"}
                            </Button>
                        }
                        {/* is text author */}
                        {
                            <Fragment>
                                <Button
                                    background={"var(--primary)"}
                                    onClick={() => setEdit(true)}>
                                    <Image
                                        w={"20px"}
                                        src={"/images/icons/edit.png"} alt="" />
                                </Button>
                                <Button
                                    background={"var(--red)"}
                                    onClick={() => deleteit(e)}>
                                    <Image
                                        w={"14px"}
                                        src={"/images/icons/delete.png"} alt="" />
                                </Button>
                                {
                                    edit &&
                                    <EditModal
                                        status={e?.reply ? "Comment" : "Reply"}
                                        open={edit}
                                        data={e}
                                        setOpen={setEdit} />
                                }
                            </Fragment>
                        }
                    </HStack>
                    <Fragment>
                        {
                            ((isreplyopen === e?._id) && editoropen) &&
                            <Box
                                ml={"auto !important"}
                                w={"95%"}>
                                <CommentForm
                                    id={isreplyopen}
                                    onFinish={onFinish}
                                    values={Body}
                                    setvalues={setBody}
                                    reply
                                    loading={loading}
                                    setreplyeditoropen={seteditoropen}
                                />
                            </Box>
                        }
                        {
                            (!editoropen && isreplyopen === e?._id) &&
                            <Box>
                                <Button
                                    mt={"20px"}
                                    marginLeft={'5%'}
                                    onClick={() => seteditoropen(true)}
                                    color='blue.400'>
                                    Add response
                                </Button>

                            </Box>
                        }

                    </Fragment>
                    {
                        (isreplyopen === e?._id && e?.reply) &&
                        <Comments
                            data={e?.reply}
                            save={false}
                        />
                    }
                </Stack>

            </Container >
        )
    )
}

export default Comments