import "./Write.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginInformationContext } from "../LoginInformationContext";
import { useContext, useState } from "react";

export default function Write({ updateData }) {
  const { nowLoginUser, setNowLoginUser } = useContext(LoginInformationContext);
  const navigate = useNavigate();
  // (title, writer, content)를 묶어서 관리하는 상태
  const [formData, setFormData] = useState({
    title: "",
    writer: nowLoginUser.userName,
    content: "",
  });

  // input 값의 변화를 추적해 formData 상태를 업데이트해주는 함수
  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  // 제출 버튼 누르면 글 목록을 저장하는 postList 상태에 업데이트 해주는 함수
  function handleSubmit() {
    if (!formData.title || !formData.writer || !formData.content) {
      alert("모든 필드에 입력해주세요.");
      return;
    }

    const formDataId = Date.now();

    updateData({ id: formDataId, ...formData });
    setFormData({
      title: "",
      writer: "",
      content: "",
    });

    navigate("/List");
  }

  return (
    <div className="container">
      <Link to="/List">
        <button id="close-btn">X</button>
      </Link>
      <form id="form">
        <label htmlFor="title">TITLE</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="writer">WRITER</label>
        <input
          type="text"
          id="writer"
          value={nowLoginUser.userName}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="content">CONTENT</label>
        <textarea
          id="content"
          style={{ height: "200px" }}
          value={formData.content}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <input
          type="button"
          value="SAVE"
          id="save-btn"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
