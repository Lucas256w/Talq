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

// GET request to get account info
const getAccountInfoAPI = async (token) => {
  const response = await fetch(`${domain}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// PUT request to update username
const updateUsernameAPI = async (token, payload) => {
  const response = await fetch(`${domain}/api/user/username`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

// PUT request to update email
const updateEmailAPI = async (token, payload) => {
  const response = await fetch(`${domain}/api/user/email`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

// PUT request to update password
const updatePasswordAPI = async (token, payload) => {
  const response = await fetch(`${domain}/api/user/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

// PUT request to update profile image from file input
const updateProfileImageAPI = async (token, formData) => {
  const response = await fetch(`${domain}/api/user/profile-img`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await response.json();
  return data;
};

export {
  getFriendsAPI,
  removeFriendAPI,
  getAccountInfoAPI,
  updateUsernameAPI,
  updateEmailAPI,
  updatePasswordAPI,
  updateProfileImageAPI,
};
