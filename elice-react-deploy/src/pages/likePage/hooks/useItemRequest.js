import axios from "axios";
import { useState, useEffect } from "react";

export default function useItemRequest(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(false)

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const URL = `/like/${year}-${month}-${day}/`;

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