export const getLocalUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return undefined;
  }
};

export const setLocalUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
