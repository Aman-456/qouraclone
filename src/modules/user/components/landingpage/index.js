import React, { useEffect } from 'react'
import FORUM from '../../../../common/Forum'
import { useDispatch } from 'react-redux'
import { setPosts } from '../../../../Store/Features/posts'
import { GETREQUEST } from '../../../../config/requests'
import { endpoints } from '../../../../config/endpoints'
function LandingPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        get()
    }, [])
    const get = async () => {
        const d = await GETREQUEST(endpoints.getall)
        if (d?.type === "success") {
            dispatch(setPosts(d.result))
        }
    }
    return <FORUM />

}

export default LandingPage