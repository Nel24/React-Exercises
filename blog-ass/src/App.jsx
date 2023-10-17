import React, { useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import BlogPost from "./components/BlogPost";
import Blog from "./components/Blog";
import ErrorMessage from "./components/ErrorMessage";
import EditPane from "./components/EditPane";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [blogList, setBlogList] = useState([]);
  const [isEdit, setIsEdit] = useState("False");
  const [forEditBlog, setForEditBlog] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });
  const [updatedBLog, setUpdatedBlog] = useState(forEditBlog);

  function addBlogItem(blog) {
    setBlogList((prevBlog) => {
      return [...prevBlog, { ...blog, ui: uuidv4() }];
    });
  }
  function deleteBlogItem(id) {
    setBlogList((prevBlog) => {
      return prevBlog.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function editBlogItem(blog, id) {
    setIsEdit((prevState) => {
      return !prevState;
    });
    setForEditBlog(blog);
  }

  function pushLatestUpdate(updatedBLog, ui) {
    setUpdatedBlog(updatedBLog);
    // setBlogList(
    //   blogList.map((itemBlog) => {
    //     itemBlog.ui === ui ? { updatedBLog } : itemBlog;
    //   })
    // );

    setBlogList((prevBlog) => {
      return [prevBlog, updatedBLog];
    });
    setIsEdit((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className="fluid-container">
      <Header />
      {isEdit === false ? (
        <EditPane
          forEditBlog={forEditBlog}
          isEdit={isEdit}
          onSetIsEdit={setIsEdit}
          onUpdateBlog={pushLatestUpdate}
        />
      ) : (
        <BlogPost onAddBlogItem={addBlogItem} />
      )}
      <div className="fluid-container blogList">
        {blogList.length === 0 ? (
          <ErrorMessage />
        ) : (
          <div>
            {blogList.map((item, index) => {
              if (!item) {
                console.error("Item is undefined at index:", index);
                return null; // Skip rendering this item
              }

              return (
                <Blog
                  key={index}
                  id={index}
                  isEdit={isEdit}
                  blog={item}
                  title={item.title}
                  author={item.author}
                  date={item.date}
                  content={item.content}
                  onDeleteBlogItem={deleteBlogItem}
                  onEditBlogItem={editBlogItem}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
