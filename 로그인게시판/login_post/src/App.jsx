import { useState, useEffect, useContext } from "react";
import { Routes, Route, json, useNavigate } from "react-router-dom";
import List from "./Post/List";
import Write from "./Post/Write";
import View from "./Post/View";
import Edit from "./Post/Edit";
import Login from "./Login/Login";
import UserEnter from "./Login/UserEnter";
import { LoginInformationContext } from "./LoginInformationContext";
import "./App.css";

function App() {
  const navigate = useNavigate();
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

  /// View를 하기 위해 필요한 정보만 갖고 있는 상태
  const [selectedPost, setSelectedPost] = useState([]);

  /// 각 게시글의 정보만 가져오는 함수
  function handleSelectedPost(post, e) {
    // 게시글의 작성자가 현재 로그인한 사용자와 같은지 확인
    if (post.writer === nowLoginUser.userName) {
      if (e.target.id === "content-title") {
        setSelectedPost(post);
        navigate("/View");
      } else if (e.target.id === "edit-btn") {
        setSelectedPost(post);
        navigate("/Edit");
      }
    } else {
      alert("사용자가 작성한 글이 아니기에 조회할 수 없습니다.");
    }
  }

  //// Edit한 글을 업데이트 하는 함수
  function handleUpdateEditData(editPost) {
    setPostList((prevList) => {
      const updatedList = prevList.map((post) =>
        post.id === editPost.id ? { ...editPost } : post
      );
      localStorage.setItem("postListData", JSON.stringify(updatedList));
      return updatedList;
    });
  }
  ///// delete 후, 로컬 업데이트 하는 함수
  function handleDeleteData(deletePost) {
    setPostList((prevList) => {
      const updatedList = prevList.filter((post) => post.id !== deletePost.id);
      localStorage.setItem("postListData", JSON.stringify(updatedList));
      return updatedList;
    });
  }
  ////// 회원가입 후, userlist를 관리하는 상태
  const [userList, setUserList] = useState(() => {
    const saveUser = localStorage.getItem("userListData");
    return saveUser ? JSON.parse(saveUser) : [];
  });

  useEffect(() => {
    localStorage.setItem("userListData", JSON.stringify(userList));
  }, [userList]);

  function handleUpdateUser(userData) {
    setUserList((prevList) => [...prevList, userData]);
  }
  // 현재 로그인이 누군지 알려주는 context(전역 상태 관리)
  const [nowLoginUser, setNowLoginUser] = useState({
    userName: "",
    password: "",
  });

  return (
    <>
      <LoginInformationContext.Provider
        value={{ nowLoginUser, setNowLoginUser }}
      >
        <Routes>
          <Route path="/" element={<Login userList={userList} />} />
          <Route
            path="/UserEnter"
            element={<UserEnter handleUpdateUser={handleUpdateUser} />}
          />
          <Route
            path="List"
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
      </LoginInformationContext.Provider>
    </>
  );
}

export default App;
