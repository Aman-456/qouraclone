

import { Heading, StackDivider, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RightBar = ({ active, w }) => {
    return (
        <VStack
            w={w ? "100% !important" : undefined}
            pos={w ? 'relative' : "fixed"}
            spacing={2}>
            <RecentQuestions />
        </VStack>
    )
}

const RecentQuestions = () => {
    const [recents, setrecents] = useState([])
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const get = async () => {
        setrecents([
            { _id: 1, question: "What are some ways to improve your productivity?" },
            { _id: 2, question: "What are some common mistakes people make in their first job?" },
            { _id: 3, question: "What are some good books to read for personal development?" },
            { _id: 4, question: "How can I improve my public speaking skills?" },
            { _id: 5, question: "What are some effective strategies for learning a new language?" },
            { _id: 6, question: "What are some effective ways to manage stress and anxiety?" },
            { _id: 7, question: "What are some tips for writing a successful college application essay?" },
            { _id: 8, question: "What are some tips for writing a successful college application essay?" }
        ])
    }
    useEffect(() => {
        get()
        return () => {
            setrecents(null)
        }
    }, [])
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            w={"100%"}
            py={"6"}
            px="2"
            borderRadius="lg"
            shadow={"md"}
            background={"white"}
            spacing={2}
        >
            <Heading
                mb={"3"}
                textAlign={"center"}
                size={"md"}>
                Recent Questions
            </Heading>

            {
                recents?.map((e, i) => {
                    return <Text
                        _loading={loading}
                        onClick={() => navigate("/question/" + e?._id)}
                        key={i}
                        cursor={"pointer"}
                        color={"blue.500"}
                        fontSize={"14px"}
                        w="100%"
                        textAlign={"left"}>
                        {e.question}
                    </Text>
                })
            }
        </VStack>
    )
}
export default RightBar
