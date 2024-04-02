const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// POST request to login
const loginAPI = async (payload) => {
  const response = await fetch(`${domain}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

//POST request to signup
const signupAPI = async (formData) => {
  const response = await fetch(`${domain}/api/signup`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

// GET request to auto re-login using JWT
const reloginAPI = async (token) => {
  const response = await fetch(`${domain}/api/re-login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export { loginAPI, signupAPI, reloginAPI };
