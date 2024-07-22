const BASE_URL = "https://panda-market-api.vercel.app";

export async function getArticles(
  page: number = 1,
  pageSize: number,
  orderBy: string,
  keyword = ""
) {
  try {
    const encodedPage = encodeURIComponent(page);
    const encodedPageSize = encodeURIComponent(pageSize);
    const encodedOrderBy = encodeURIComponent(orderBy);
    const encodedKeyword = encodeURIComponent(keyword);

    const response = await fetch(
      `${BASE_URL}/articles?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrderBy}&keyword=${encodedKeyword}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const article = response.json();

    return article;
  } catch (error) {
    console.error("Error fetching Articles", error);
  }
}

export async function getArticleDetail(id: string | undefined): Promise<any> {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  try {
    const encodedId = encodeURIComponent(id);

    const response = await fetch(`${BASE_URL}/articles/${encodedId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const article = response.json();

    return article;
  } catch (error) {
    console.error("Error fetching Article", error);
  }
}

export async function getComments(
  id: string | undefined,
  limit: number = 3
): Promise<any> {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  try {
    const encodedId = encodeURIComponent(id);
    const encodedLimit = encodeURIComponent(limit);

    const response = await fetch(
      `${BASE_URL}/articles/${encodedId}/comments?limit=${encodedLimit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const comments = response.json();

    return comments;
  } catch (error) {
    console.error("Error fetching Comments", error);
  }
}
