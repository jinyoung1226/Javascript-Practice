import { useState, useEffect } from "react";
import List from "./Post/List";
import Write from "./Post/Write";
import View from "./Post/View";
import Edit from "./Post/Edit";
import { Routes, Route, json, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  // 초기 상태를 로컬 스토리지에서 불러오거나, 로컬 스토리지가 없으면 빈 배열로 설정
  const [postList, setPostList] = useState(() => {
    const savedPosts = localStorage.getItem("postListData");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // postlist 상태가 업데이트 될 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("postListData", JSON.stringify(postList));
  }, [postList]);

  // 전체 글 목록에 새로 글 쓴 데이터 추가해주는 함수
  function handleUpdateData(writeData) {
    setPostList((prevList) => [...prevList, writeData]);
  }

  // View를 하기 위해 필요한 정보만 갖고 있는 상태
  const [selectedPost, setSelectedPost] = useState([]);

  // 각 게시글의 정보만 가져오는 함수
  function handleSelectedPost(post) {
    setSelectedPost(post);
  }

  // Edit한 글을 업데이트 하는 함수
  function handleUpdateEditData(editPost) {
    setPostList((prevList) => {
      const updatedList = prevList.map((post) =>
        post.id === editPost.id ? { ...editPost } : post
      );
      localStorage.setItem("postListData", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  function handleDeleteData(deletePost) {
    setPostList((prevList) => {
      const updatedList = prevList.filter((post) => post.id !== deletePost.id);
      localStorage.setItem("postListData", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <List
              postList={postList}
              handleSelectedPost={handleSelectedPost}
              handleDeleteData={handleDeleteData}
            />
          }
        />
        <Route
          path="/Write"
          element={<Write updateData={handleUpdateData} />}
        />
        <Route path="/View" element={<View selectedPost={selectedPost} />} />
        <Route
          path="/Edit"
          element={
            <Edit
              selectedPost={selectedPost}
              handleUpdateEditData={handleUpdateEditData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
