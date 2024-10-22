import React, { useState, useCallback, useMemo, lazy, Suspense } from "react";
import Comment from "./Comment";
import styles from "../styles/CommentSection.module.css";

import { initialComments } from "../data/comments";

import { useComments } from "../hooks/useComments";
import { appendEmojiToComment } from "../utils/emojiUtils";

const EmojiPicker = lazy(() => import("emoji-picker-react"));

const CommentSection = () => {
  const { comments, addComment, toggleLike, addReply } =
    useComments(initialComments);
  const [newComment, setNewComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleAddComment = useCallback(() => {
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment("");
    }
  }, [newComment, addComment]);

  const handleEmojiSelect = useCallback(
    (emoji) => {
      setNewComment((prev) => appendEmojiToComment(prev, emoji));
    },
    [setNewComment]
  );

  const memoizedComments = useMemo(
    () =>
      comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onLikeToggle={toggleLike}
          onReply={addReply}
        />
      )),
    [comments, toggleLike, addReply]
  );

  return (
    <div className={styles.commentSection}>
      <h2>Reviews and Comments</h2>

      <div className={styles.commentsList}>{memoizedComments}</div>

      <div className={styles.addComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your review or comment..."
        ></textarea>
        <div className={styles.emojiPicker}>
          <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            😀
          </button>

          {showEmojiPicker && (
            <Suspense fallback={<div>Loading...</div>}>
              <EmojiPicker onEmojiClick={handleEmojiSelect} />
            </Suspense>
          )}
        </div>
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
