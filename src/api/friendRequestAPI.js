const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// GET request to get incoming friend requests
const getIncomingRequestsAPI = async (token) => {
  const response = await fetch(`${domain}/api/friend-requests/received`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// GET request to get outgoing friend requests
const getOutgoingRequestsAPI = async (token) => {
  const response = await fetch(`${domain}/api/friend-requests/sent`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// POST request to send a friend request
const sendFriendRequestAPI = async (token, username) => {
  const response = await fetch(`${domain}/api/friend-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username }),
  });
  const data = await response.json();
  return data;
};

// DELETE request to cancel/reject a friend request
const deleteFriendRequestAPI = async (token, requestId) => {
  const response = await fetch(`${domain}/api/friend-requests/${requestId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// POST request to accept a friend request
const acceptFriendRequestAPI = async (token, requestId) => {
  const response = await fetch(
    `${domain}/api/friend-requests/accept/${requestId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export {
  getIncomingRequestsAPI,
  getOutgoingRequestsAPI,
  sendFriendRequestAPI,
  deleteFriendRequestAPI,
  acceptFriendRequestAPI,
};
