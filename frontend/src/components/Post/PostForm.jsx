import React, { useEffect, useState } from 'react';
import { CreatePost } from './PostAPI';


const PostForm = ({onClose}) => {
  const [formData, setFormData] = useState(false);
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPost({ ...post, image: file });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    const user = localStorage.getItem("user");

    newFormData.append('title', post.title);
    newFormData.append('content', post.content);
    newFormData.append('image', post.image);
    newFormData.append('user', user);

    setFormData(newFormData);
    setPost({title: '', content: '', image: null})
  }

  useEffect(() => {
    if(formData){
      const createPost = async () => {
        try {
          const response = await CreatePost(formData);
          alert(response);
          onClose(false);
        } catch (error) {
          console.log("CREATE POST", error);
          alert('There was an error during creating the post')
        }
      }
      createPost();
    }
  },[formData])

  return (
    <div className="editor flex flex-col">
      <from onSubmit={submitHandler} method='POST'>
        <input className="title w-full border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="message w-full p-3  border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          name="content"
          value={post.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Image Input */}
        <div className="image-upload mb-4">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-gray-100 border border-gray-300 p-2 w-full outline-none"
            required
          />
          
        </div>


        <button
          type='submit'
          className="w-full px-4 py-2 border-2 border-b-4 border-green-500 font-bold tracking-wide text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200"
          onClick={submitHandler}
        >
          Post
        </button>
      </from>
    </div>
  );
};

export default PostForm;
