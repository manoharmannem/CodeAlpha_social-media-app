import { useState } from "react";

function PostCard({
  post,
  onLike,
  addComment,
  deletePost,
  editPost,
}) {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(post.content);

  const handleComment = () => {
    if (!comment.trim()) return;

    addComment(post.id, comment);
    setComment("");
  };

  const saveEdit = () => {
    editPost(post.id, editText);
    setEditing(false);
  };

  return (
    <div className="post-card">
      <div className="post-header">
  {post.avatar ? (
    <img
      src={post.avatar}
      alt="avatar"
      className="post-avatar"
    />
  ) : (
    <div className="avatar"></div>
  )}

  <div>
    <h3>{post.user}</h3>
    <small>{post.time}</small>
  </div>
</div>

      {editing ? (
  <>
    <textarea
      className="edit-box"
      value={editText}
      onChange={(e) =>
        setEditText(e.target.value)
      }
    />

    <button
      className="save-btn"
      onClick={saveEdit}
    >
      Save
    </button>
  </>
) : (
  <>
    <p className="post-content">
      {post.content}
    </p>

    {post.image && (
      <img
        src={post.image}
        alt="post"
        className="post-image"
      />
    )}
  </>
)}

      <div className="actions">
        <button onClick={() => onLike(post.id)}>
          ❤️ {post.likes}
        </button>

        <button
          onClick={() =>
            setShowComments(!showComments)
          }
        >
          💬 {post.comments.length}
        </button>

        <button
          onClick={() => setEditing(true)}
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => deletePost(post.id)}
        >
          🗑️ Delete
        </button>
      </div>

      {showComments && (
        <>
          <div className="comment-box">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              }
            />

            <button onClick={handleComment}>
              Post
            </button>
          </div>

          <div className="comments-container">
            {post.comments.map((item, index) => (
              <div
                key={index}
                className="comment-item"
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostCard;