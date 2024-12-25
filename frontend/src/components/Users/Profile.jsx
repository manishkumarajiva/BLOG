import React, {useEffect, useState} from 'react';
import Post from '../Post/Post';
import PostList from '../Post/PostList';
import { GetUser } from './UserAPI';


const Profile = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const userid = localStorage.getItem('user');


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await GetUser(userid);
        setUser(response.response);
      } catch (error) {
        console.log("GET USER", error);
        alert('There is an error during get user');
      }
    }
    getUser();
  },[])

  return (
    <React.Fragment>
      <div className="max-w-lg mx-auto my-10 bg-slate-600 rounded-lg shadow-lg shadow-red-300 p-5">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={`http://localhost:8880/${user.avatar}`}
          alt={user.name}
        />
        <h2 className="text-center text-white text-2xl font-semibold mt-3"> {user.name} </h2>
        <p className="text-center text-white mt-1"> {user.email} </p>

        <button onClick={()=>setOpen(true)} className="block mx-auto mt-3 px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
          New Post
        </button>
      </div>
      <Post open={open} setOpen={setOpen}></Post>
      <PostList></PostList>
    </React.Fragment>
  );
}

export default Profile;
