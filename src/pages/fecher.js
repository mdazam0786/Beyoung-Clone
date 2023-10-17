export const fetcher = async (endpoint, options = {}, Signup = true) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    projectId: "f104bi07c490",
  };

  if (Signup) {
    options.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }

  const url = `https://academics.newtonschool.co/api/v1/${endpoint}`;
  const response = await fetch(url, options);
  return response.json();
};
