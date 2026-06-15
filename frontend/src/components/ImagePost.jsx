import { useState } from "react";

function ImagePost() {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="image-upload">
      <input type="file" onChange={handleImage} />

      {image && (
        <img
          src={image}
          alt="preview"
          className="preview-image"
        />
      )}
    </div>
  );
}

export default ImagePost;