import '@testing-library/jest-dom';

process.env = Object.assign(process.env, {
  NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
  NEXT_PUBLIC_API_URL: 'http://localhost:4000/api',
});
