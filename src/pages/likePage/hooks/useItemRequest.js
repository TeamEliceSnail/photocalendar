import axios from "axios";
import { useState, useEffect } from "react";

export default function useItemRequest(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(false)

    const DEV_URL = 'http://localhost:5030';

    useEffect(() => {
        setItems([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: `http://localhost:5030/like/2022-5-13/1`,
            // params: { q: "what is", page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res)
            setItems( prevItems => [...new Set([...prevItems, ...res.data.docs.map(b => b.title)])] )
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, items, hasMore }
}