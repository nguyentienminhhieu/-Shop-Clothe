import Cookies from 'js-cookie';

const TOKEN = "token";
const USER = "user";
const EMAIL = "email";
// const REFRESH_TOKEN = "refresh_token"; // Thêm khai báo cho refresh token

export const getToken = () => {
  return Cookies.get(TOKEN);
};

export const saveToken = token => {
  Cookies.remove(TOKEN);
  Cookies.set(TOKEN, token, {expires: 60 * 60 * 24});
};

export const destroyToken = () => {
  Cookies.remove(TOKEN);
};

export const saveData = (key,value) => {
  Cookies.set(key,value);
};
export const getData = (key) => {
  return Cookies.get(key);
};

export const getUser = () => {
  return Cookies.get(USER);
};

export const saveUser = user => {
  Cookies.remove(USER);
  Cookies.set(USER, user, {expires: 60 * 60 * 24});
};

export const destroyUser = () => {
  Cookies.remove(USER);
};

export const getEmail = () => {
  return Cookies.get(EMAIL);
};

export const saveEmail = user => {
  Cookies.remove(EMAIL);
  Cookies.set(EMAIL, user, {expires: 60 * 60 * 24});
};

export const destroyEmail = () => {
  Cookies.remove(EMAIL);
};
// Thêm phần xử lý cho refresh token
// export const getRefreshToken = () => {
//   return Cookies.get(REFRESH_TOKEN);
// };

// export const saveRefreshToken = (refreshToken) => {
//   Cookies.remove(REFRESH_TOKEN);
//   Cookies.set(REFRESH_TOKEN, refreshToken, { expires: 60 * 60 * 24 });
// };

// export const destroyRefreshToken = () => {
//   Cookies.remove(REFRESH_TOKEN);
// };

export default {
  getToken,
  saveToken,
  saveData,
  getData,
  destroyToken,
  destroyUser,
  saveUser,
  getUser,
  getEmail,
  saveEmail,
  destroyEmail,
  // getRefreshToken,
  // saveRefreshToken,
  // destroyRefreshToken,
};
