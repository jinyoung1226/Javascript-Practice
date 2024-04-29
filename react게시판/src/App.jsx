import { useState } from "react";
import "./List/List.css";
import List from "./List/List.jsx";
import Write from "./Write/Write.jsx";
import View from "./View/View.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("list");
  const [posts, setPosts] = useState([]);
  const [selectedpost, setSelectedPost] = useState(null);

  function handleWriteClick(btn) {
    setCurrentPage(btn);
  }

  function handleNewPost(postData) {
    setPosts([...posts, postData]);
    setCurrentPage("list");
  }

  function handlePostSelect(post) {
    setSelectedPost(post);
    setCurrentPage("view");
  }

  return (
    <div>
      <section id="list-page">
        {currentPage === "list" ? (
          <List
            onSelect={() => handleWriteClick("write")}
            posts={posts}
            onPostSelected={handlePostSelect}
          />
        ) : null}
      </section>

      <section id="write-page">
        {currentPage === "write" ? (
          <Write
            onSelect={() => handleWriteClick("list")}
            submit={handleNewPost}
          />
        ) : null}
      </section>
      <section id="view-page">
        {currentPage === "view" && selectedpost ? (
          <View post={selectedpost} onSelect={() => handleWriteClick("list")} />
        ) : null}
      </section>
    </div>
  );
}

export default App;
