import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { UsersAction } from './redux-saga/actions';
import { PostsAction } from './redux-saga/actions/posts';

function App() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state);
  useEffect(() => {
    dispatch(UsersAction.getUsers());
    dispatch(PostsAction.getPosts());
    // eslint-disable-next-line
  }, []);
  console.log('state', response);
  return (
    <div className="App">
      <h1>User</h1>
      {response.users.loading && <h1>Loading...</h1>}
      {response.users.users && response.users.users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
      {!response.users.loading && response.users.error && <h1>{response.users.error}</h1>}
      ====================================
      <h1>Posts</h1>
      {response.posts.loading && <h1>Loading...</h1>}
      {response.posts.posts && response.posts.posts.map((post, i) => <h1 key={i}>{post.title}</h1>)}
      {!response.posts.loading && response.posts.error && <h1>{response.posts.error}</h1>}
    </div>
  );
}

export default App;
