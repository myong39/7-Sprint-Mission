import axios, { AxiosRequestConfig } from 'axios';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type Body = object | null;

interface ApiRequestProps {
  endpoint: string;
  method: Method;
  body?: Body;
}

async function apiRequest({ endpoint, method, body = null }: ApiRequestProps) {
  const options: AxiosRequestConfig = {
    method,
    url: endpoint,
    data: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `${method} 요청에 실패했습니다: ${error.response.status} ${error.response.statusText}`
        );
      } else if (error.request) {
        throw new Error(`${method} 요청에 실패했습니다: 서버가 응답하지 않습니다.`);
      } else {
        throw new Error(`${method} 요청에 실패했습니다: ${error.message}`);
      }
    } else {
      throw new Error(`${method} 요청에 실패했습니다: ${error}`);
    }
  }
}

interface GetArticlesProps {
  page: number;
  pageSize: number;
  orderBy?: 'recent' | 'like';
  keyword?: string;
}

export async function getArticles({
  page = 1,
  pageSize,
  orderBy = 'recent',
  keyword = '',
}: GetArticlesProps) {
  const endpoint = `articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const requestOptions: ApiRequestProps = { endpoint, method: 'GET' };
  return await apiRequest(requestOptions);
}
