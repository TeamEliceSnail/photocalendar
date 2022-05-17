import axios from "axios";
import { useState, useEffect } from "react";

export default function useItemRequest(pageNumber) {
    const URL = `/like/2022-05-17/`
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(false)
    console.log(pageNumber)
    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: URL + pageNumber,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setItems( prevItems => [...new Set([...prevItems, ...res.data])] )
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber])

    return { loading, error, items, hasMore }
}