import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchPosts, postsSelector } from './slices/Posts';
import Posts from './Posts';

const PostsPage = () => {
    const dispatch = useDispatch();
    const { posts, loading, hasErrors } = useSelector(postsSelector);

    useEffect(() => {
        dispatch(fetchPosts);
    }, [dispatch]);

    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return 
    }
}

export default PostsPage;
