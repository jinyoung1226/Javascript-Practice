import "./Write.css";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Edit({ selectedPost, handleUpdateEditData }) {
  const navigate = useNavigate();
  const [post, setPost] = useState(selectedPost);

  // input 값의 변화를 추적해 post 상태를 업데이트해주는 함수
  function handleChange(e) {
    const { id, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [id]: value }));
  }

  // Edit 완료했을 때, app 컴포넌트의 postlist를 업데이트 해주는 함수
  function handleSave() {
    handleUpdateEditData(post);
    navigate("/List");
  }

  return (
    <div className="container">
      <Link to="/List">
        <button id="close-btn">X</button>
      </Link>
      <form id="form">
        <label htmlFor="title">TITLE</label>
        <input
          type="text"
          id="title"
          value={post.title}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="writer">WRITER</label>
        <input
          type="text"
          id="writer"
          value={post.writer}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="content">CONTENT</label>
        <textarea
          id="content"
          style={{ height: "200px" }}
          value={post.content}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <input
          type="button"
          value="SAVE"
          id="save-btn"
          onClick={() => handleSave()}
        />
      </form>
    </div>
  );
}
