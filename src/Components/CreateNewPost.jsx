import '../app.css';
function CreateNewPost ({savePostTitle, savePostContent,postSave}) {
    return (
        <div div className= "create-post">
        <form onSubmit={postSave}>
              <h1>Create New Post</h1>
              <input type ="text" onChange={savePostTitle}  placeholder="title" size="39" required></input>
              <br />
              <br />
              <textarea onChange={savePostContent} placeholder="contents" rows="8" cols="41"required></textarea>
              <br />
              <br />
              <section class="button-wrapper">
                <button className="button">Save Post</button>
              </section>
        </form>
            </div>
    );
  };
  export default CreateNewPost;