import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwic2NvcGUiOiJhY2Nlc3MiLCJpYXQiOjE3MjEzNzU5MzMsImV4cCI6MTcyMTM3NzczMywiaXNzIjoic3AtcGFuZGEtbWFya2V0In0.lLKNlU8NqmVhvcpyUQ987jBhqAk67OUuMGPcdEoGVE0",
});

export default instance;