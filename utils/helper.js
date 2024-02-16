export const getFirstLetter = (string) => {
  let newStr = string.split("")[0].toUpperCase();
  return newStr;
};

export const getToken = (str) => {
  return str.split("=")[1];
};

export function checkEmptyFields(data) {
  const values = Object.values(data);
  return !values.some(
    (value) => value === null || value === undefined || value === ""
  );
}
