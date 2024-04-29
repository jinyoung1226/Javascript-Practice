import { useState } from "react";
import "../Write/Write.css";

export default function View({ post, onSelect }) {
  return (
    <div className="container">
      <button id="close-btn" onClick={onSelect}>
        X
      </button>
      <form id="form">
        <label htmlFor="title">title</label>
        <input type="text" id="title" value={post.title} />

        <label htmlFor="writer">writer</label>
        <input type="text" id="writer" value={post.writer} />

        <label htmlFor="content">content</label>
        <textarea
          id="content"
          style={{ height: "200px" }}
          value={post.content}
        ></textarea>
      </form>
    </div>
  );
}
