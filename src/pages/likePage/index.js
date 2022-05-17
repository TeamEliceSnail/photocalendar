import React, { useCallback, useEffect, useRef, useState } from 'react';
import Wrapper from './style';
import LikeItem from './components/LikeItem';
import useItemRequest from './hooks/useItemRequest';
import Loading from '../../common/components/loading';
import Header from './components/Header';

const LikePage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const {
        items,
        hasMore,
        loading,
        error
    } = useItemRequest(pageNumber)

    const observer = useRef()
    const lastItemElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <Wrapper>
            <Header></Header>
            <div id="like-item-container">
                {items.map((item, index) => {
                    if (items.length === index + 1) {
                        return <div ref={lastItemElementRef} ><LikeItem key={index} item={item}/></div>
                    } else {
                        return <LikeItem key={index} item={item}/>
                    } 
                }
                )}
            </div>
            {loading && <Loading/>}
        </Wrapper>
    );
};

export default LikePage;
