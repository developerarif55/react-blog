import React from "react";
const ModifyPost = ({title,savePostTitle,content, savePostContent, updatePost}) => {
  return (
    <>
    <div className="create-post">
      <form>
        <h1>Modify Post</h1>
        <input
          defaultValue={title}
          onChange={savePostTitle}
          type ="text"
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={content}
          placeholder="contents"
          onChange={savePostContent}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <section className="button_wrapper">
          <button className="button" onClick ={updatePost}>Update Post</button>
        </section>
        
      </form>
      </div>
    </>
  );
};
export default ModifyPost;