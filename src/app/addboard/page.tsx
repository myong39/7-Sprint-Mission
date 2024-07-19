
export default async function AddBoard() {

  return (
    <>
      <h1>게시글 쓰기</h1>
      <form>
        <input id="submit" type="submit" />
        <label htmlFor="title">제목</label>
        <input id="title" type="text" name="title" value="title" />
        <label htmlFor="content">내용</label>
        <textarea id="content" name="content" value="content"/>
        <label htmlFor="image">이미지</label>
        <input id="image" type="file" name="image" value="image"/>
      </form>
    </>
  );
}