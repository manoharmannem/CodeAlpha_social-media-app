import { useState } from "react";

function CreatePost({ addPost }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!text.trim() && !image) return;

    addPost(text, image);

    setText("");
    setImage(null);

    document.getElementById("imageInput").value = "";
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="imageInput" className="upload-btn">
  📷 Add Photo
</label>

<input
  id="imageInput"
  type="file"
  accept="image/*"
  onChange={handleImage}
  hidden
/>

      {image && (
        <img
          src={image}
          alt="preview"
          className="preview-image"
        />
      )}

      <button onClick={handleSubmit}>
        Create Post
      </button>
    </div>
  );
}

export default CreatePost;