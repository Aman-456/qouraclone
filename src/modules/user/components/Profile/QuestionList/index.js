import { useState, useEffect } from "react"
import { Box } from "@chakra-ui/react"
import ListedQuestion from "../../../../../common/listedQuestion"
import Spinner from "../../../../../common/Loader/content"
function Index({ query }) {
    const [list, setlist] = useState([])
    const [loading, setloading] = useState(false)
    const get = async () => {
        // get questinos logic
    }
    useEffect(() => {
        get()
        return () => {
            setlist(null)
            setloading(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box>
            {
                loading ? <Spinner />
                    :
                    list?.length > 0 ?
                        list?.map((e, i) => {
                            return (
                                <Box mb={"15px"} key={i}>
                                    <ListedQuestion d={e} key={i} />
                                </Box>
                            )
                        })
                        :
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
        </Box >
    )
}

export default Index