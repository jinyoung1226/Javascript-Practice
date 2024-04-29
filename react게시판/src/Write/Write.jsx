import { useState } from "react";
import "./Write.css";

export default function Write({ onSelect, submit }) {
  const [title, setTitle] = useState("");
  const [writer, setwriter] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit() {
    if (!title || !writer || !content) {
      alert("모든 필드에 입력해주세요");
      return;
    }

    const postId = Date.now();

    submit({ id: postId, title, writer, content });
    setTitle("");
    setwriter("");
    setContent("");
  }

  return (
    <div className="container">
      <button id="close-btn" onClick={onSelect}>
        X
      </button>
      <form id="form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">TITLE</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="writer">WRITER</label>
        <input
          type="text"
          id="writer"
          value={writer}
          onChange={(e) => setwriter(e.target.value)}
        />

        <label htmlFor="content">CONTENT</label>
        <textarea
          id="content"
          value={content}
          style={{ height: "200px" }}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <input
          type="button"
          value="SAVE"
          id="save-btn"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
