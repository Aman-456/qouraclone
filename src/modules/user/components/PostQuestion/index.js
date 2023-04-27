import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Editor from '../../../../common/Editor'
import { TagsInput } from "react-tag-input-component"
import { Button } from '@chakra-ui/react'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { POSTREQUEST } from '../../../../config/requests'
import { endpoints } from '../../../../config/endpoints'

function PostQuestion() {

    const [Body, setBody] = useState("")
    const [Title, setTitle] = useState("")
    const [Tags, setTags] = useState([])
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    const createpost = async () => {
        try {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"))?._id

            if (String(Title)?.trim().length < 10)
                return Swal.fire({
                    icon: "info",
                    title: "Add Title properly"
                })

            if (String(Body)?.trim().length < 10)
                return Swal.fire({
                    icon: "info",
                    title: "Add question description properly"
                })
            if (Tags?.length < 1)
                return Swal.fire({
                    icon: "info",
                    title: "At Least 1 Tag should be added before saving question"
                })

            setloading(true)
            const data = await POSTREQUEST(endpoints.createpost, {
                Author: currentUser,
                Title: Title,
                Body: Body,
                Tags: Tags
            });
            if (data.type === 'success') {
                navigate("/question/" + data?.result?._id)
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: data?.result
                })
            }
            console.log(data);
            setloading(false)
        }
        catch (e) {
            setloading(false)
            Swal.fire({
                icon: "error",
                title: e?.message || "something went wrong try again later!"
            })
        }
    }

    useEffect(() => {
        return () => {
            setBody(null)
            setTags(null)
            setTitle(null)
            setloading(null)
        }
    }, [])
    return (
        <Box className=" QuestionPage shadow2 "
            p={"1rem"}
            bg="white"
            borderRadius={"12px"}
            shadow={"md"}>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                w={'full'}
                mb="10"
            >
                <Heading
                    lineHeight={1.1}
                    fontWeight={700}
                    color="var(--primary)"
                    fontSize={{ base: '4xl', sm: '4xl', lg: '4xl' }}>
                    <Text as={'span'} position={'relative'}>Ask a Question</Text>
                    <br />
                </Heading>
            </Flex>
            <div className="input_title">
                <Text as={'h3'} fontSize="1.4rem" fontWeight={"500"}>Add a Title</Text>
                <p>Be specidfied and imagine you are asking question from another person</p>
                <input
                    onChange={e => setTitle(e.currentTarget.value)} type="text" placeholder="e.g how to add hover effect in css3?" />
            </div>
            <div className="Editor_container">
                <Text as={'h3'} fontSize="1.4rem" fontWeight={"500"}>Body</Text>
                <p>Include all the information someone might need to answer your question</p>
                <Editor setvalues={setBody} />
            </div>
            <div className="QuestionPage_tag Editor_container">
                <Text as={'h3'} fontSize="1.4rem" fontWeight={"500"}>Tags</Text>
                <p>Add upto 5 tags to show what is your question is about</p>
                <TagsInput
                    onChange={e => setTags(e || [])}
                    className="tagsInput"
                    name='tags'
                    separators={" "}
                    placeHolder='write a tag name and press space-key'
                />
            </div>
            <Button
                style={{ display: "flex", alignItems: "center" }}
                disabled={loading}
                _loading={loading}
                className="btn" onClick={createpost} loading={loading} >Submit</Button>
        </Box>
    )
}

export default PostQuestion



