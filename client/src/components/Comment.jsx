import { useState } from "react";
import Avatar from "../assets/avatar.jpg";
import { RiSendPlane2Fill } from "react-icons/ri";
import "./comment.css";

const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "User",
      text: "This is a great model! Really helped me out with my project.",
      time: "56 minutes ago",
      replies: [],
    },
  ]);

  const [replyText, setReplyText] = useState("");
  const [activeReplyId, setActiveReplyId] = useState(null);

  /* 🔹 Add Comment */
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setComments([
      {
        id: Date.now(),
        user: "User",
        text: commentText,
        time: "Just now",
        replies: [],
      },
      ...comments,
    ]);

    setCommentText("");
  };

  /* 🔹 Add Reply */
  const handleReplySubmit = (commentId) => {
    if (!replyText.trim()) return;

    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now(),
                  user: "User",
                  text: replyText,
                  time: "Just now",
                },
              ],
            }
          : comment
      )
    );

    setReplyText("");
    setActiveReplyId(null);
  };

  return (
    <div className="comment_container">
      {/* 🔹 Comment Form */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>

        <button type="submit" className="btn_send">
          <RiSendPlane2Fill />
        </button>
      </form>

      <h3>Comments</h3>

      {/* 🔹 Comments List */}
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            {/* Header */}
            <div className="comment_header flex_box align_center">
              <div className="comment_avatar">
                <img src={Avatar} alt="avatar" />
              </div>
              <div className="username">
                <h4>{comment.user}</h4>
                <span className="posted">{comment.time}</span>
              </div>
            </div>

            {/* Body */}
            <div className="comment_body">
              <p>{comment.text}</p>
            </div>

            {/* Reply Button */}
            <button
              className="reply_btn"
              onClick={() =>
                setActiveReplyId(
                  activeReplyId === comment.id ? null : comment.id
                )
              }
            >
              Reply
            </button>

            {/* Reply Box */}
            {activeReplyId === comment.id && (
              <div className="reply_box">
                <textarea
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                ></textarea>
                <button onClick={() => handleReplySubmit(comment.id)}>
                  Reply
                </button>
              </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply) => (
                  <div className="reply" key={reply.id}>
                    <div className="comment_header flex_box align_center">
                      <div className="comment_avatar small">
                        <img src={Avatar} alt="avatar" />
                      </div>
                      <div className="username">
                        <h4>{reply.user}</h4>
                        <span className="posted">{reply.time}</span>
                      </div>
                    </div>
                    <div className="comment_body">
                      <p>{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
