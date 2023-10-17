import { useState } from "react";

function EditPane(props) {
  const [updatedBLog, setUpdatedBlog] = useState(props.forEditBlog);

  function fetchUpdatedValue(e) {
    console.log("I have clicked");
    const { value, name } = e.target;
    setUpdatedBlog((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function updateBlog() {
    console.log("You have clicked update");
    console.log(updatedBLog);
    props.onUpdateBlog(updatedBLog, updatedBLog.ui);
    
  }
  return (
    <div className="container">
      <h1 style={{ margin: "30px" }}>Editing...</h1>
      <form action="">
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={props.forEditBlog.title}
          onChange={fetchUpdatedValue}
          value={updatedBLog.title}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          defaultValue={props.forEditBlog.author}
          onChange={fetchUpdatedValue}
          value={updatedBLog.author}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          defaultValue={props.forEditBlog.date}
          onChange={fetchUpdatedValue}
          value={updatedBLog.date}
        />
        <textarea
          name="content"
          id=""
          cols="50"
          rows="10"
          placeholder="Content"
          defaultValue={props.forEditBlog.content}
          onChange={fetchUpdatedValue}
          value={updatedBLog.content}
        ></textarea>
        <button type="button" className="btn btn-primary" onClick={updateBlog}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditPane;
