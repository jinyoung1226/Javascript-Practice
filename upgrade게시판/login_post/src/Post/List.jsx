import { Link } from "react-router-dom";

export default function List({
  postList,
  handleSelectedPost,
  handleDeleteData,
}) {
  function handleDeletePost(post) {
    handleDeleteData(post);
  }

  return (
    <div id="Board">
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
              <Link to={"/View"}>
                <div
                  id="content-title"
                  onClick={() => handleSelectedPost(post)}
                >
                  Title : {post.title}
                </div>
              </Link>
              <div id="content-writer">Writer : {post.writer}</div>
              <Link to={"/Edit"}>
                <button id="edit-btn" onClick={() => handleSelectedPost(post)}>
                  Edit
                </button>
              </Link>
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
