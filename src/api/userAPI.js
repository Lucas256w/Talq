const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// GET request to get friends list
const getFriendsAPI = async (token) => {
  const response = await fetch(`${domain}/api/friends`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// DELETE request to remove a friend
const removeFriendAPI = async (token, friendId) => {
  const response = await fetch(`${domain}/api/friends/${friendId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export { getFriendsAPI, removeFriendAPI };
