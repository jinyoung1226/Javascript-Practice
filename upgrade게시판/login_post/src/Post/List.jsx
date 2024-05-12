import { Link } from "react-router-dom";
import { LoginInformationContext } from "../LoginInformationContext";
import { useContext, useState } from "react";

export default function List({
  postList,
  handleSelectedPost,
  handleDeleteData,
}) {
  function handleDeletePost(post) {
    if (post.writer === nowLoginUser.userName) {
      handleDeleteData(post);
    } else {
      alert("사용자가 작성한 글이 아니기에 삭제할 수 없습니다.");
    }
  }

  const { nowLoginUser, setNowLoginUser } = useContext(LoginInformationContext);

  return (
    <div id="Board">
      <div id="nowuser">현재 사용자: {nowLoginUser.userName}</div>
      <Link to={"/"}>
        <button id="logout-btn">로그아웃</button>
      </Link>
      <div id="header">
        <h1 id="title">CRUD Board</h1>
        <Link to="/Write">
          <button id="write-btn">Write</button>
        </Link>
      </div>
      <div id="Board-box">
        <ul id="contents-list">
          {postList.map((post, index) => (
            <li className="contents" key={index}>
              <div
                id="content-title"
                onClick={(e) => handleSelectedPost(post, e)}
              >
                Title : {post.title}
              </div>
              <div id="content-writer">Writer : {post.writer}</div>
              <button
                id="edit-btn"
                onClick={(e) => handleSelectedPost(post, e)}
              >
                Edit
              </button>
              <button id="delete-btn" onClick={() => handleDeletePost(post)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
