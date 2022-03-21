import { toggleComment } from "../../State/ComSlicer";
import { useDispatch, useSelector } from "react-redux";
import ComSlicer from "../../State/ComSlicer";



import React from 'react'

export function TogComment() {
    const isCommentsOpen = useSelector((state : any)=> state.comment.commentOpen);
    const dispatch = useDispatch();
     return () => {
         dispatch(toggleComment());
         console.log(isCommentsOpen);
    }

//   return (
//     <div>togComment</div>
//   )
}

export default TogComment