import styled from "styled-components";

export default styled.div`
    padding-bottom: 100px;

    & > .loading {
        position: relative;
        width: 96px;
        height: 96px;
        margin: 0 auto;
        padding: 10px;
    }

    & > .dot div {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transform: translateY(-40px);
    }

    & > .dot div:nth-child(1) {
        width: 18px;
        height: 18px;
        border-radius: 10px;
        background-color: gray
        ;
        animation: dot 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }

    & > .dot div:nth-child(2) {
        width: 14px;
        height: 14px;
        border-radius: 8px;
        background-color: gray
        ;
        animation: dot 2s 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }

    & > .dot div:nth-child(3) {
        width: 10px;
        height: 10px;
        border-radius: 6px;
        background-color: gray
        ;
        animation: dot 2s 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }

    & > .dot div:nth-child(4) {
        width: 6px;
        height: 6px;
        border-radius: 4px;
        background-color: gray
        ;
        animation: dot 2s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }

    & > .dot div:nth-child(5) {
        width: 2px;
        height: 2px;
        border-radius: 2px;
        background-color: gray
        ;
        animation: dot 2s 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }

    @keyframes dot {
        0% {
            transform: rotate(0deg) translateY(-40px);
        }
        100% {
            transform: rotate(360deg) translateY(-40px);
        }
    }
`