const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts({
  orderBy = 'createdAt',
  page = '1',
  pageSize = '4',
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${API_URL}?${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패했습니다');
  }

  const body = await response.json();
  return body;
}

export async function getDetailProduct(id) {
  const query = `${id}`;
  const response = await fetch(`${API_URL}/${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('상세 아이템을 불러오는데 실패했습니다');
  }

  const body = await response.json();
  return body;
}

export async function getProductComments(id) {
  const query = `${id}/comments?limit=4`;
  const response = await fetch(`${API_URL}/${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('댓글을 불러오는데 실패했습니다');
  }

  const body = await response.json();
  return body;
}
