import React, { useEffect, useState } from "react";
import Post from "./Post";
import feed from "../../feed.json";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Feeds() {
  // const [feed, setFeed] = useState<any>(null)

  // useEffect(() => {

  //   async function fetchMyAPI() {
  //     let response = await fetch("https://www.reddit.com/r/popular.json")
  //     response = await response.json()
  //     console.log(response.status)
  //     setFeed(response)
  //   }

  //   fetchMyAPI()
  // }, [])

  const customStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 0.5fr)",
    gridautoRows: "20px",
  };

  return feed ? (
    <div className="feed bg-slate-800 col-span-5 row-span-6 overflow-y-scroll overflow-x-clip">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2, 1500: 3 }}>
        <Masonry columnsCount={2}>
          {feed.data.children.map((d: any, i: number) => {
            return (
              <Post
              key={i}
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
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Feeds;
