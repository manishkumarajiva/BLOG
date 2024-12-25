import React, { useEffect, useState } from 'react'
import { FetchComment } from './CommentAPI';


const CommentList = ({postid}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const Comments = async () => {
            try {
                const response = await FetchComment(postid)
                if (response.success) {
                    setComments(response.response);
                }
            } catch (error) {
                console.error("COMMENTS", error);
                alert('There is an error during fetch comments');
            }
        }
        Comments();
    },[postid])
    return (
        <React.Fragment>
            <ul className="divide-y divide-gray-100">
                {comments.map((comment,index) => (
                    <li key={index} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img alt="" src={`http://localhost:8880/${comment.user.avatar}`} className="size-12 flex-none rounded-full bg-gray-50" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm/6 font-semibold text-white">{comment.user.name}</p>
                                <p className="text-sm/6 text-white">{comment.comment}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="mt-1 text-xs/5 text-gray-500"> {new Date(comment.createdAt).toLocaleDateString()} </p>
                        </div>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default CommentList
