import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import styles from "../styles/Comment.module.css";

const Comment = ({ comment, onLikeToggle, onReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className={styles.commentItem}>
      <p>
        <strong>{comment.user}</strong>: {comment.content}
      </p>
      <div className={styles.commentActions}>
        <button
          onClick={() => onLikeToggle(comment.id)}
          className={comment.likedByUser ? styles.liked : styles.notLiked}
        >
          <FaThumbsUp /> {comment.likes}
        </button>
        <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
      </div>

      {comment.replies.length > 0 && (
        <div className={styles.repliesList}>
          {comment.replies.map((reply) => (
            <div key={reply.id} className={styles.replyItem}>
              <p>
                <strong>{reply.user}</strong>: {reply.content}
              </p>
              <button
                onClick={() => onLikeToggle(comment.id, reply.id)}
                className={reply.likedByUser ? styles.liked : styles.notLiked}
              >
                <FaThumbsUp /> {reply.likes}
              </button>
            </div>
          ))}
        </div>
      )}

      {showReplyBox && (
        <div className={styles.replyBox}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          ></textarea>
          <button onClick={handleReplySubmit}>Submit Reply</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
