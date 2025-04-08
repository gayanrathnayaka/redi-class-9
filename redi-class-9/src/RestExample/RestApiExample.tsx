import { useState } from "react";
import {
  getPost,
  getPosts,
  createPost,
  deletePost,
  getPostsUsingFetch,
  getPostsUsingAxios
} from "../api/post";

export default function RestApiExample() {
  const [posts, setPosts] = useState<any[]>([]);
  const [post, setPost] = useState<any>({});

  const getAllPosts = () => {
    clearDisplay();
    getPosts()
      .then((posts) => {
        setPosts(posts);
        console.log("Fetched posts:", posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const getAllPostsByFetch = () => {
    clearDisplay();
    getPostsUsingFetch()
      .then((posts) => {
        setPosts(posts);
        console.log("Fetched posts:", posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const getAllPostsByAxios = () => {
    clearDisplay();
    getPostsUsingAxios()
      .then((posts) => {
        setPosts(posts);
        console.log("Fetched posts:", posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const getSinglePost = (id: number) => {
    clearDisplay();
    getPost(id)
      .then((post) => {
        console.log("Fetched post:", post);
        setPost(post);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  };

  const createNewPost = (post: {
    title: string;
    body: string;
    userId: number;
  }) => {
    clearDisplay();
    createPost(post)
      .then((newPost) => {
        console.log("Created post:", newPost);
        setPost(newPost);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  const updateExistingPost = (
    id: number,
    post: { title: string; body: string; userId: number }
  ) => {
    clearDisplay();
    createPost(post)
      .then((updatedPost) => {
        setPost(updatedPost);
        console.log("Updated post:", updatedPost);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const clearDisplay = () => {
    setPosts([]);
    setPost({});
  };

  return (
    <>
      <div>
        <h1>REST API Example</h1>
        <button onClick={getAllPosts} className="App-button">
          Get Posts
        </button>
        <button onClick={getAllPostsByFetch} className="App-button">
          Get Posts By Fetch
        </button>
        <button onClick={getAllPostsByAxios} className="App-button">
          Get Posts By Axios
        </button>

        <button
          onClick={() => {
            getSinglePost(1);
          }}
          className="App-button"
        >
          Get Post
        </button>

        <button
          onClick={() => {
            createNewPost({
              title: "New Post",
              body: `This is a new post created on ${new Date().toISOString()}`,
              userId: 1
            });
          }}
          className="App-button"
        >
          Create Post
        </button>
        <button
          onClick={() => {
            updateExistingPost(1, {
              title: "Updated Post",
              body: `This post is updated on ${new Date().toISOString()}`,
              userId: 1
            });
          }}
          className="App-button"
        >
          Update Post
        </button>
        <button
          onClick={() => {
            deletePost(1)
              .then((response) => {
                console.log("Deleted post:", response);
                // setPost(response);
              })
              .catch((error) => {
                console.error("Error deleting post:", error);
              });
          }}
          className="App-button"
        >
          Delete Post
        </button>
      </div>

      <div>
        <h2>Display</h2>

        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}

        {post && (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </>
  );
}
