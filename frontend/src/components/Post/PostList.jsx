import React, { useEffect, useState } from 'react';
import Comment from '../Comments/Comment';
import { GetAllPost } from './PostAPI';


const Post = ({ id, title, description, imageUrl, date, user, show, setShow }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-sm mx-auto p-6 flex flex-col gap-5">
      <img className="rounded-lg w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
          <small>{new Date(date).toLocaleDateString()}</small>
         {user &&  <button onClick={() => setShow(true)} className="text-xs font-medium text-white bg-blue-500 rounded-lg py-1 px-3 hover:bg-green-500 transition-all">
            Comment
          </button>}
        </div>
        { show && <Comment id={id} setShow={setShow}></Comment> }
      </div>
    </div>

  );
};



const PostList = () => {

  const [posts, setPostList] = useState([]);
  const [show, setShow] = useState(false);
  const user = localStorage.getItem('user');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const list = await GetAllPost();
        setPostList(list)
      } catch (error) {
        console.error('FETCH POST : ', error);
        alert('There is an error during fetching post\'s list')
      }
    }
    fetchPost();
  }, [])


  return (
    <div className="flex flex-wrap gap-4 justify-center my-5">
      {posts && posts.map((post, index) => (
        <Post
          key={index}
          id={post._id}
          title={post.title}
          description={post.content}
          imageUrl={`http://localhost:8880/${post.image}`}
          date={post.createdAt}
          user={user}
          show={show}
          setShow={setShow}
        />
      ))}
    </div>
  );
};

export default PostList;