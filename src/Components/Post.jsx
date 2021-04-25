import '../app.css'
export default function Post({title, content, editPost,deletePost, id}) {
    return (
        <>
 <section className="post-container">
    <h3>{title}</h3>
    <p className="post-content">{content}</p> 
   
    <div className="post_button">
           <button className="button_orange"  onClick={() => editPost(id)}>Edit</button>
           <button className="button_red" onClick={() => {if(window.confirm('Are you sure to delete this record?')) deletePost(id)}}>Delete</button>
    </div>
    </section>
    </>
    )
}
