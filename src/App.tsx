import React from 'react';
import { useSelector } from 'react-redux';
import Drawer from './components/Drawer';
import CommentSection from './components/Feeds/Comments/CommentSection';
import Feeds from './components/Feeds/Feeds';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const isCommentsOpen = useSelector((state : any)=> state.comment.commentOpen);
  return (
    <div className="App grid grid-cols-6 grid-rows-6 w-screen h-screen gap-3" >
      {/* 
      *make outline of the design first 
      *then make it responsive
      *then make it look good
      * then work on extras like drawer and popups 
      
      
      */}
      {/* header */}
      {/* <Header/> */}
      {/* sidebar hidden on phone */}
      <Sidebar/>
      {/* posts 2 cols if with more */}
      <Feeds/>
      {/*drawer hidden */}
      <Drawer/>
      
      {/* popups */}
      {isCommentsOpen && <CommentSection/>}
    </div>
  );
}


export default App;
