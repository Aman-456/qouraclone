import React, { useLayoutEffect } from 'react'
import FORUM from '../../../../common/Forum'
import { posts } from "../../../../common/data"
import { useDispatch } from 'react-redux'
import { setPosts } from '../../../../Store/Features/posts'
import { hideLoader, showLoader } from '../../../../Store/Features/LoaderSlice'
function PinnedQuesinos() {
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(showLoader())
        dispatch(setPosts(posts))
        const timeout = setTimeout(() => { dispatch(hideLoader()) }, 1000);
        return () => {
            clearTimeout(timeout)
            dispatch(setPosts([]))

        }
    }, [dispatch])

    return <FORUM />

}

export default PinnedQuesinos