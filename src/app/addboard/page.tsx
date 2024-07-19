'use client'

import axios from "@/lib/axios";
import {createArticle} from "@/lib/requests";
import {useState} from "react";

export default function AddBoard() {
  const [data, setData] = useState({ title: "", content: "", image: "" });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setData("image", e.target.files[0]);
    }
    setData( { ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (data) => {
    createArticle(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={!setData.title && !setData.content}>등록</button>
        {/*<input type="hidden" name="accessToken" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwic2NvcGUiOiJhY2Nlc3MiLCJpYXQiOjE3MjEzNzU5MzMsImV4cCI6MTcyMTM3NzczMywiaXNzIjoic3AtcGFuZGEtbWFya2V0In0.lLKNlU8NqmVhvcpyUQ987jBhqAk67OUuMGPcdEoGVE0"/>*/}
        {/*<input type="hidden" name="accessToken" value={localStorage.getItem("accessToken")}/>*/}
        <label htmlFor="title">&#42;제목</label>
        <input id="title" type="text" required name="title" placeholder="제목을 입력해 주세요." onChange={handleChange}/>
        <label htmlFor="content">&#42;본문</label>
        <textarea id="content" required name="content" placeholder="본문을 입력해 주세요." onChange={handleChange}/>
        <label htmlFor="image">이미지</label>
        <input id="image" type="file" accept="image/*" name="image" onChange={handleChange}/>
      </form>
    </>
  );
}