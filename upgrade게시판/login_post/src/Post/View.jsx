import "./Write.css";
import { Link } from "react-router-dom";

export default function View({ selectedPost }) {
  return (
    <div className="container">
      <Link to="/List">
        <button id="close-btn">X</button>
      </Link>
      <form id="form">
        <label htmlFor="title">TITLE</label>
        <input type="text" id="title" value={selectedPost.title} readOnly />

        <label htmlFor="writer">WRITER</label>
        <input type="text" id="writer" value={selectedPost.writer} readOnly />

        <label htmlFor="content">CONTENT</label>
        <textarea
          id="content"
          style={{ height: "200px" }}
          value={selectedPost.content}
          readOnly
        ></textarea>
      </form>
    </div>
  );
}
