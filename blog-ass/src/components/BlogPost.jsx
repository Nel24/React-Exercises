import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function BlogPost(props) {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });

  function fetchInputValue(event) {
    const { name, value } = event.target;
    setBlog((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitBlog(event) {
    props.onAddBlogItem(blog);
    setBlog({
      title: "",
      author: "",
      date: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1 style={{ margin: "30px" }}>{"<Hourly News>"}</h1>
      <form action="">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={fetchInputValue}
          value={blog.title}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={fetchInputValue}
          value={blog.author}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          onChange={fetchInputValue}
          value={blog.date}
        />
        <textarea
          name="content"
          id=""
          cols="50"
          rows="10"
          placeholder="Content"
          onChange={fetchInputValue}
          value={blog.content}
        ></textarea>
        <button type="button" className="btn btn-success" onClick={submitBlog}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default BlogPost;
