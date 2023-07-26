import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmEwZWRkYTYwMTM5OTNhNzQwMGFjZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTAzNDczNjYsImV4cCI6MTY5MDYwNjU2Nn0.-6yPlvMULIULv7sDscFjLmkiQmk5tFEqtfygB34qd14';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
