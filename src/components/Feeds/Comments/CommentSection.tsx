import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComSlicer from "../../../State/ComSlicer";
import Media from "../../Utilities/Media";
import Post from "../Post";
import CommentThread from "./CommentThread";
import { toggleComment } from "../../../State/ComSlicer";
// import { TogComment } from "../../Utilities/TogComment";

function CommentSection() {
  // const isCommentsOpen = useSelector((state : any)=> state.comment.commentOpen);
  const dispatch = useDispatch();
  const toggleComments = () => {
    dispatch(toggleComment());
    // console.log(isCommentsOpen);
  };

  const [data, dataSet] = useState<any>(null);

  const url = useSelector((state: any) => state.comment.post_url);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'origin': 'https://www.reddit.com'}});
      response = await response.json();
      console.log(response.status);
      dataSet(response);
    }

    fetchMyAPI();
  }, []);

  const d = data ? data[0].data.children[0] : null;

  return data ? (
    <div
      className={
        "absolute w-screen h-screen bg-black/25 flex flex-col justify-center items-center "
      }
    >
      {/* center a container */}
      <button
        onClick={() => toggleComments()}
        className="absolute top-0 right-0 m-2 bg-white text-blue-900 p-3 rounded"
      >
        <i className="bi bi-x"></i>
        Close
      </button>

      <div className=" bg-slate-200 w-4/5 h-4/5 rounded grid grid-cols-6 grid-rows-6 gap-3">
        <div className="col-span-2 row-span-6 z-10 flex align-middle">
          {/* <Media url="https://i.redd.it/tqe6vcm171o81.jpg" /> */}
          <Post
            hfixed={false}
            imgUrl={d.data.url}
            video_url={d.data.media?.reddit_video.fallback_url}
            username={d.data.author}
            subreddit={d.data.subreddit}
            time={d.data.created}
            upvote={d.data.ups}
            title={d.data.title}
            post_type={d.data.post_hint}
            text={d.data.selftext_html}
            thread_link={d.data.url.replace(/.$/, ".json")}
            comments={d.data.num_comments}
            awards_recieved={d.data.total_awards_received}
          />
        </div>
        <div className="col-span-4 row-span-5 overflow-scroll">
          <CommentThread data={data} />
        </div>
        <div className="col-span-4 row-span-1 flex">
          <textarea className="w-full h-max"></textarea>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default CommentSection;
