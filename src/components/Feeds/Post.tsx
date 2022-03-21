import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Media from "../Utilities/Media";
import { setUrl, toggleComment } from "../../State/ComSlicer";
import ReactPlayer from "react-player";

type postProp = {
  hfixed: boolean;
  imgUrl: string;
  username: string;
  subreddit: string;
  time: number;
  upvote: number;
  comments: number;
  awards_recieved: number;
  title: string;
  post_type: string | undefined;
  text: string | null;
  thread_link: string;
  video_url: string | undefined;
};

function Post({
  hfixed,
  imgUrl,
  username,
  subreddit,
  time,
  upvote,
  title,
  post_type,
  text,
  thread_link,
  video_url,
  comments,
  awards_recieved,
}: postProp) {
  const isCommentsOpen = useSelector((state: any) => state.comment.commentOpen);
  const dispatch = useDispatch();

  const toggleComments = (url: string) => {
    dispatch(toggleComment());
    dispatch(setUrl(url));
  };

  const renderContent = () => {
    if (text) {
      return (
        <div className=" overflow-y-scroll max-h-full"
          dangerouslySetInnerHTML={{ __html: require("he").decode(text) }}
        ></div>
      );
    } else {
      if (post_type === "hosted:video") {
        return <video src={video_url} controls style={{ width: "100%", height: "100%" }} />
        // <div className=" relative" style={{ paddingTop: "56.25%" }}>
        
        {/* <ReactPlayer className=" absolute top-0 left-0" playing={true} url={video_url}></ReactPlayer> */}
        // </div>
      } else if (post_type === "link") {
        return <h1>its a link</h1>;
      } else {
        return (
          <div className=" relative">
            <img className={" max-h-full max-w-full"} src={imgUrl} alt="alt" />
          </div>
        );
      }
    }
  };

  
    
  return (
    <div className="post bg-neutral-300 p-3 m-3 flex flex-col self-start max-w-full border-t-4 max-h-screen">
      <div className="post-header">
        <div className="flex pb-2">
          <img
            src="https://a.thumbs.redditmedia.com/gzFudZMlgieGBTZ7zeyzKRQ1-zqm1tu_hTLL83tCtO4.jpg"
            className="w-14 h-14 rounded mr-2 object-cover"
            alt="peakaboo"
          />
          <div className="flex flex-col justify-start w-full">
            <div className="flex">
              <a href="#" className="mr-auto">
                {subreddit}
              </a>
              <a href="#" className="text-gray-500">
                {username}
              </a>
              <a href="#" className="text-gray-500">
                {time}
              </a>
            </div>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="post-body object-contain box-border overflow-hidden">{renderContent()}</div>
      <div className="post-footer  w-full">
        <div className="flex p-2 justify-evenly">
          <span className="flex">
            <a href="#">
              <i className="bi bi-file-arrow-up"></i>
            </a>
            <h6 className="mx-2">{upvote}</h6>
            <a href="#">
              <i className="bi bi-file-arrow-down"></i>
            </a>
          </span>

          <button onClick={() => toggleComments(thread_link)} className="flex">
            <i className="bi bi-chat-square-dots"></i>
            <h6 className="ml-2">{comments}</h6>
          </button>

          <a href="#" className="flex">
            <i className="bi bi-award"></i>
            <h6 className="ml-2">{awards_recieved}</h6>
          </a>
          <a href="#">
            <i className="bi bi-share"></i>
          </a>
          <a href="#">
            <i className="bi bi-bookmark-plus"></i>
          </a>
          <a href="#">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
