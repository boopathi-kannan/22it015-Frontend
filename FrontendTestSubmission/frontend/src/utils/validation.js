
export function validateURL(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + 
      "((([a-zA-Z0-9-]+)\\.)+[a-zA-Z]{2,})" + 
      "(\\/[a-zA-Z0-9@:%._+~#=/-]*)?$", 
    "i"
  );
  return !!pattern.test(url);
}


export function validateExpiry(value) {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
}
