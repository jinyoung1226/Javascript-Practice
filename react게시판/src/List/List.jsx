import Edit from "../Edit/Edit.jsx";
import { useState } from "react";

export default function List({ onSelect, posts, onPostSelected }) {
  const [editingPost, setEditingPost] = useState(null);
  const [allPosts, setAllPosts] = useState(posts);

  function handleEditClick(post) {
    setEditingPost(post);
  }

  function handleCloseEdit() {
    setEditingPost(null);
  }

  function handleSavePost(updatedPost) {
    const updatedPosts = allPosts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setAllPosts(updatedPosts);
  }

  function handleDeletePost(deletePost) {
    const updatedPosts = allPosts.filter((post) => post.id !== deletePost.id);
    setAllPosts(updatedPosts);
  }

  if (editingPost) {
    return (
      <Edit
        post={editingPost}
        onClose={handleCloseEdit}
        onSave={handleSavePost}
      />
    );
  }

  return (
    <div id="Board">
      <div id="header">
        <h1 id="title">CRUD Board</h1>
        <button id="write-btn" onClick={onSelect}>
          Write
        </button>
      </div>
      <div id="Board-box">
        <ul id="contents-list">
          {allPosts.map((post, index) => (
            <li className="contents" key={post.id}>
              <div id="content-title" onClick={() => onPostSelected(post)}>
                {post.title}
              </div>
              <div id="content-writer">{post.writer}</div>
              <button id="edit-btn" onClick={() => handleEditClick(post)}>
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
