import { useState } from "react";
import "../Login/UserEnter.css";
import { useNavigate } from "react-router-dom";

export default function UserEnter({ handleUpdateUser }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // 회원가입 정보 입력을 업데이트 해주는 함수
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  function signUp() {
    event.preventDefault(); // 폼의 기본 동작 방지
    // 사용자 이름이 같을 때 경고 주기
    const saveUserList = JSON.parse(localStorage.getItem("userListData")) || [];
    const check = saveUserList.filter(
      (userOne) => userOne.userName === user.userName
    );
    if (check.length > 0) {
      alert("이미 존재하는 사용자 이름입니다. 다시 입력해주세요.");
      return navigate("/UserEnter");
    }

    const formDataId = Date.now();
    handleUpdateUser({ id: formDataId, ...user });
    setUser({ userName: "", email: "", password: "", confirmPassword: "" });
    navigate("/");
  }

  return (
    <>
      <div className="signup-container">
        <h1>회원가입</h1>
        <form action="/signup" method="post">
          <UserInformation
            label="사용자 이름"
            name="userName"
            type="text"
            value={user.userName}
            onChange={handleChange}
          />
          <UserInformation
            label="이메일"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <UserInformation
            label="비밀번호"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <UserInformation
            label="비밀번호 확인"
            name="confirmPassword"
            type="password"
            value={user.confirmPassword}
            onChange={handleChange}
          />
          <div className="form-group">
            <button type="submit" onClick={signUp}>
              가입하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function UserInformation({ label, name, type, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
