export const getFirstLetter = (string) => {
  let newStr = string.split("")[0].toUpperCase();
  return newStr;
};

export const getToken = (str) => {
  return str.split("=")[1];
};
