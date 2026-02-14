import React from 'react';
import styles from './PhotoComments.module.css';

const PhotoComments = ({ id, comments }) => {
  return (
    <section className={styles.comments}>
      {comments && comments.map((comment) => (
        <div key={comment.comment_ID} className={styles.comment}>
          <p className={styles.author}>{comment.comment_author}</p>
          <p className={styles.text}>{comment.comment_content}</p>
        </div>
      ))}
    </section>
  );
};

export default PhotoComments;
