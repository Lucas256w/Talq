const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// POST request to create a message room
const createMessageRoomAPI = async (token, payload) => {
  const response = await fetch(`${domain}/api/message-rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

// GET request to get message rooms
const getMessageRoomsAPI = async (token) => {
  const response = await fetch(`${domain}/api/message-rooms`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// GET request to get one message room
const getMessageRoomAPI = async (token, id) => {
  const response = await fetch(`${domain}/api/message-room/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// DELETE request to remove a user from a message room
const removeUserFromMessageRoomAPI = async (token, roomId) => {
  const response = await fetch(
    `${domain}/api/message-room/remove-user/${roomId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

// PUT request to add a user to a message room
const addUserToMessageRoomAPI = async (token, roomId, payload) => {
  const response = await fetch(
    `${domain}/api/message-room/add-user/${roomId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data;
};

export {
  createMessageRoomAPI,
  getMessageRoomsAPI,
  getMessageRoomAPI,
  removeUserFromMessageRoomAPI,
  addUserToMessageRoomAPI,
};
