import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginInformationContext } from "../LoginInformationContext";

export default function Login({ userList }) {
  const navigate = useNavigate();
  const [loginInformation, setLoginInformation] = useState({
    userName: "",
    password: "",
  });

  // 로그인 정보 입력을 업데이트 해주는 함수
  function handleChange(e) {
    const { id, value } = e.target;
    setLoginInformation((prevUser) => ({ ...prevUser, [id]: value }));
  }
  // 전역변수로 현재 로그인을 한 사용자에 대해 저장함
  const { nowLoginUser, setNowLoginUser } = useContext(LoginInformationContext);

  function checkLoginInformation(e) {
    e.preventDefault(); // 폼의 기본 동작 방지

    const user = userList.find(
      (user) =>
        user.userName === loginInformation.userName &&
        user.password === loginInformation.password
    );

    // 일치하는 사용자가 있는 경우
    if (user) {
      setNowLoginUser({
        userName: loginInformation.userName,
        password: loginInformation.password,
      });
      navigate("/List");
    } else {
      alert("사용자 정보가 일치하지 않습니다. 다시 입력해주세요.");
    }
  }

  return (
    <>
      <div id="login-box">
        <h2>CRUD 게시판</h2>
        <form>
          <label htmlFor="userName">사용자 이름</label>
          <input
            type="text"
            id="userName"
            required
            value={loginInformation.userName}
            onChange={handleChange}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="text"
            id="password"
            required
            value={loginInformation.password}
            onChange={handleChange}
          />
          <ol>
            <li>
              <button id="login" onClick={checkLoginInformation}>
                로그인
              </button>
            </li>
            <Link to={"/UserEnter"}>
              <li>
                <button id="userenter">회원가입</button>
              </li>
            </Link>
          </ol>
        </form>
      </div>
    </>
  );
}
