import { useState } from "react";

export const useComments = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const addComment = (newCommentContent) => {
    if (newCommentContent.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: "You",
        content: newCommentContent,
        likes: 0,
        likedByUser: false,
        replies: [],
      };
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  const toggleLike = (commentId, replyId = null) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        if (replyId === null) {
          return {
            ...comment,
            likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1,
            likedByUser: !comment.likedByUser,
          };
        } else {
          const updatedReplies = comment.replies.map((reply) =>
            reply.id === replyId
              ? {
                  ...reply,
                  likes: reply.likedByUser ? reply.likes - 1 : reply.likes + 1,
                  likedByUser: !reply.likedByUser,
                }
              : reply
          );
          return { ...comment, replies: updatedReplies };
        }
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const addReply = (commentId, replyContent) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                user: "You",
                content: replyContent,
                likes: 0,
                likedByUser: false,
              },
            ],
          }
        : comment
    );
    setComments(updatedComments);
  };

  return { comments, addComment, toggleLike, addReply };
};
