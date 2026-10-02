import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-box">
      <h2>❤️ Interactive Like</h2>

      <p>
        Total Likes: <strong>{likes}</strong>
      </p>

      <button onClick={handleLike}>
        ❤️ Like
      </button>
    </div>
  );
}

export default LikeButton;