
import React, { useState } from 'react';
import '../app.css';
import CreateNewPost from './CreateNewPost';
import ModifyPost from './ModifyPost';
import Post from './Post';

function DisplayAllPosts() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

    // save my post
    const savePostTitle = event => {
        setTitle(event.target.value);
    }
   
    const savePostContent = event => {
        setContent(event.target.value)
       
       
    }

    // now post show content

    const postSave = (event) => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, {title, content, id}])
        setTitle("");
        setContent("");
        toogleCreatPost();
        console.log(allPosts)
    }

    // now toogle my post with create button
    const toogleCreatPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }
// modification with update
  const toogleModifyPost = () => {
      setIsModifyPost(!isModifyPost)
}

// edit post function
 const editPost = id => {
     setEditPostId(id)
     toogleModifyPost();
    
 }
 
// now update post function
const updatePost = (event) => {
event.preventDefault();

const updatedPost = allPosts.map(post =>{
if(post.id === editPostId){
    return{
        ...post,
        title:title || post.title,
        content: content || post.content
    }
}
return post

});
setAllPosts(updatedPost)
toogleModifyPost()
}

// delete post
const deletePost = (id) => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };


if (isCreateNewPost){
     return(
       <>
            <CreateNewPost 
            savePostTitle={savePostTitle}
            savePostContent={savePostContent}
            postSave={postSave}
            
            />
        </>
    );
} else if (isModifyPost){
    const post = allPosts.find(post => {
        return post.id === editPostId;
      });
      return(
        <ModifyPost 
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitle={savePostTitle}
        savePostContent={savePostContent}
        />
      )
}
    return(
    <>
        {!allPosts.length ? (
            <section className="no-post">
                <div className="no_post_details">
                <h3>I have Found Nothing here</h3>
                 <br />
                 <section className="buttin-wrapper">
                 <button className="button"  onClick={toogleCreatPost}>Make a post</button>
                 </section>
                </div>
            </section>
           
        ):(
           <div><h1>all posts</h1>
            <section className="button-wrapper">
               <button onClick={toogleCreatPost} className="button">Create New</button>
              </section>
            <section className="all-post">
             {allPosts.map(post => {
                return(
                    <Post 
                    id={post.id}
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    editPost={editPost}
                    deletePost={deletePost}
                    />
                    );
                })}
           
                </section>
                
                </div>
              )}
        
              
            </>
          );
        };

export default DisplayAllPosts
