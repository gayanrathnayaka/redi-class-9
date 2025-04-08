import axios from "axios";

const BASE_URL = "https://dummyjson.com/posts";

export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.posts;
};

export const getPost = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const createPost = async (post: {
  title: string;
  body: string;
  userId: number;
}) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const updatePost = async (
  id: number,
  post: { title: string; body: string; userId: number }
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.post;
};

export const deletePost = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

//fetch example

export const getPostsUsingFetch = () => {
  return fetch(`${BASE_URL}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.posts)
    .catch((error) => {
      console.error("Error fetching posts:", error);
      return null; // or return []; depending on your use case
    });
};

//axios example

export const getPostsUsingAxios = () => {
  return axios
    .get(`${BASE_URL}`)
    .then((response) => response.data.posts)
    .catch((error) => {
      console.error("Error fetching posts:", error);
      return null; // or return []; depending on your use case
    });
};

//add interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers["Authorization"] = "AUTH_TOKEN";
    console.log("Request made with ", config);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status === 200) {
      console.log("Response data: ", data);
    } else {
      console.error("Error in response: ", response);
    }

    // Do something with response data
    console.log("Response received ", response);
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);
