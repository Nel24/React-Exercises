function Blog(props) {
  function deleteBlog() {
    props.onDeleteBlogItem(props.id);
  }

  const editBlog = () => {
    console.log(props.blog);
    console.log(props.id);
    props.onEditBlogItem(props.blog, props.id);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6>{props.author}</h6>
        <p className="card-text">{props.content}</p>
        {props.isEdit === false ? (
          <div></div>
        ) : (
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={editBlog}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteBlog}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
