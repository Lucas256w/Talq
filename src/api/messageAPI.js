const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// POST request to create a message
const createMessageAPI = async (token, payload, roomId) => {
  const response = await fetch(`${domain}/api/messages/${roomId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: payload,
    }),
  });
  const data = await response.json();
  return data;
};

// GET request to get messages
const getMessagesAPI = async (token, roomId) => {
  const response = await fetch(`${domain}/api/messages/${roomId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export { createMessageAPI, getMessagesAPI };
