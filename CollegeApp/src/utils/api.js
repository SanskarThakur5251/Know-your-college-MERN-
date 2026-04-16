// src/utils/api.js
export const apiRequest = async (url, method = "GET", body = null) => {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  const res = await fetch(`http://localhost:4000${url}`, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "API Error");
  return data;
};
