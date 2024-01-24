import { useNavigate } from 'react-router-dom';
import classes from './PostItem.module.css';

function PostItem({ post }) {
  const naviagte = useNavigate();

  const backHandler = () => {
    naviagte('..')
  };

  return (
    <article className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={backHandler}>Back</button>
    </article>
  );
}

export default PostItem;
