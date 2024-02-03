import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostbyId, isLoading, error] =useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] =useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
   
useEffect(() => {
    fetchPostbyId(params.id)
    fetchComments(params.id)
}, [])

    return (
   <div>
    <h1>Post</h1>
    {isLoading
    ?<Loader/>
    :<>
    <h5>{post.title}</h5>
    <div>{post.body}</div>
    </>
}

<h1>Comments</h1>
{isComLoading
    ?<Loader/>
    :<div>
    {comments.map(comment =>
    <>
      <h5>{comment.email}</h5>
      <div>{comment.body}</div>
      </> 
    )}
    </div>
}
   </div>
    );
};

export default PostIdPage;
