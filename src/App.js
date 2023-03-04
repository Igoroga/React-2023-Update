import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import MyModal from './components/UI/MyModal/MyModal'
import PostFilter from './components/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'adsads', body: 'dsadas' },
    { id: 2, title: 'adsads', body: 'dsadas' },
  ]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
    <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
      Создать пользователя
    </MyButton>
    <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
    </MyModal>
    <hr style={{ margin: "15px 0" }} />
    <PostFilter filter={filter} setFilter={setFilter} />
    <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
  </div>
    );
  }

export default App;