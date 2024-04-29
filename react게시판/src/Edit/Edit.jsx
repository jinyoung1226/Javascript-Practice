import { useState } from "react";
import "../Write/Write.css";

export default function Edit({ post, onClose, onSave }) {
  const [title, setTitle] = useState(post.title);
  const [writer, setWriter] = useState(post.writer);
  const [content, setContent] = useState(post.content);

  function handleSaveEdit() {
    onSave({ id: post.id, title, writer, content });
    onClose();
  }

  return (
    <div className="container">
      <button id="close-btn" onClick={onClose}>
        X
      </button>
      <form id="form">
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="writer">writer</label>
        <input
          type="text"
          id="writer"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />

        <label htmlFor="content">content</label>
        <textarea
          id="content"
          style={{ height: "200px" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </form>
      <input
        type="button"
        value="EDIT"
        id="edit-btn"
        onClick={handleSaveEdit}
      />
    </div>
  );
}
