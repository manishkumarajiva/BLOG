import React, { useState } from 'react';
import { Button } from '@headlessui/react';
import { CreateComment } from './CommentAPI';
import CommentList from './CommentList';


const Comment = ({ id, setShow }) => {
  const [comment, setComment] = useState("");
  const user = localStorage.getItem('user');

  const handleComment = (e) => {
    setComment(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = { user : user, post : id, comment : comment };
  
    const Comment = async () => {
      try {
        const message = await CreateComment(payload);
        alert(message);
        setShow(false);
      } catch (error) {
        console.log('NEW COMMENT', error);
        alert('There is an error during comment');
      }
    }
    Comment();
  }

  return (
    <React.Fragment>
      <form method="post" onSubmit={submitHandler} className='flex justify-between'>
        <input type="text" name="comment" value={comment} onChange={handleComment} placeholder='comment...' className='bg-transparent border-b-2 outline-none text-white' />
        <Button type="submit" className="rounded bg-sky-600 px-1 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
          Send
        </Button>
        <Button onClick={()=>setShow(false)} className="rounded bg-red-600 px-1 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-red-700">
          close
        </Button>
      </form>
      <CommentList postid={id}></CommentList>
    </React.Fragment>
  )
}

export default Comment;
