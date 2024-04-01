import React from "react"
import {useMediaQuery} from "react-responsive";

let data = [
    {
        id : 0,
        title : "Bread",
        content : "B▢▢▢▢",
        price : 5000,
        imageUrl: "/bbang.png",
        isAnswered : false
    },

    {
        id : 1,
        title : "Cake",
        content : "C▢▢▢",
        price : 24000,
        imageUrl: "/bbang2.png",
        isAnswered : false
    },

    {
        id : 2,
        title : "Cookie",
        content : "C▢▢▢▢▢",
        price : 7000,
        imageUrl: "/bbang3.png",
        isAnswered: false
    }
]

export {data};
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    });
    return <>{isMobile && children}</>
}

export const Pc = ({ children }) => {
    const isPc = useMediaQuery({
        query: "(min-width:769px)"
    });
    return <>{isPc && children}</>
}