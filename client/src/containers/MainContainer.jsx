import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import  { deletePost, getAllPosts, postPost, putPost }  from '../services/posts';
import { getAllTopics } from '../services/topics';
import { getAllComments } from '../services/comments';
import Posts from '../screens/Posts/Posts';
import PostCreate from '../screens/PostCreate';
import PostEdit from '../screens/PostEdit';
import Topics from '../screens/Topics';
import PostDetail from '../screens/PostDetail';

export default function MainContainer({currentUser}) {
  
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [topics, setTopics] = useState([]);
    const history = useHistory();

    useEffect(() => {
      const fetchComments = async () =>{
        const commentsList = await getAllComments();
          setComments(commentsList)
        };
    fetchComments();    
},[]);

    useEffect(() => {
      const fetchPosts = async () =>{
        const postList = await getAllPosts();
          setPosts(postList)
        };
    fetchPosts();    
},[]);

useEffect(() => {
    const fetchTopics = async () => {
        const topicList = await getAllTopics();
        setTopics(topicList)
    };
    fetchTopics()
},[]);

const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/posts');
  };

  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    
    
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <Switch>
      <Route path='/posts/:id/edit'>
        <PostEdit currentUser = { currentUser } posts={posts} handlePostUpdate={handlePostUpdate} />
      </Route>
      <Route path='/posts/new'>
        <PostCreate currentUser = { currentUser } topics = {topics} handlePostCreate={handlePostCreate} />
      </Route>
      <Route path='/posts/:id'>
        <PostDetail currentUser = { currentUser } comments = {comments} topics={topics} />
      </Route>
      <Route path='/posts'>
        <Posts currentUser = { currentUser } posts={posts} handlePostDelete={handlePostDelete} />
      </Route>
      <Route path='/topics'>
        <Topics currentUser = { currentUser } topics={topics} />
      </Route>
    </Switch>
  );







}