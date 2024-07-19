import axios from "@/lib/axios";

export async function createArticle(data) {
  try {
    await axios.post("/articles", data);
    alert("게시글이 성공적으로 등록되었습니다.");
    window.location.href = "/boards";
  } catch (error) {
    alert("게시글 등록에 실패했습니다.")
  }
}