import React from "react";

function Comments({
  username,
  comment,
  time,
}: {
  username: any;
  comment: any;
  time: any;
}) {

  const he = require("he");
  return (
    <div className="flex bg-slate-400 m-5 ml-0">
      <img
        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
        alt=""
        className=" w-5 h-5 rounded-full mr-3"
      />
      <div>
        <div className="flex ">
          <h5>{username} </h5>
          <h6 className="text-cyan-900">{time}</h6>
        </div>
        <p dangerouslySetInnerHTML={{__html: he.decode(comment["body_html"])}}></p>
        <div className="flex p-2 justify-evenly">
          <span className="flex">
            <a href="#">
              <i className="bi bi-file-arrow-up"></i>
            </a>
            <h6 className="mx-2">666</h6>
            <a href="#">
              <i className="bi bi-file-arrow-down"></i>
            </a>
          </span>

          <a href="#" className="flex">
            <i className="bi bi-chat-square-dots"></i>
            <h6 className="ml-2">666</h6>
          </a>

          <a href="#">
            <i className="bi bi-award"></i>
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
        {/* <a href="#">+5 replies</a> */}
        {/* <Comments/> */}
        {comment.replies &&
          comment.replies.data.children.map((reply: any) => {
            return reply.kind === "t1" ? (
              <Comments
                key={reply.data.id}
                username={reply.data.author}
                comment={reply.data}
                time={reply.data.created}
              />
            ) : (
              <h1 key={"s"}>More</h1>
            );
          })}
      </div>
    </div>
  );
}

export default Comments;
