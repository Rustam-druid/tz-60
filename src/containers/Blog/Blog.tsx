import React, {useEffect, useState} from 'react';
import {BlogPost} from "../../types";
import PostCard from "../../components/PostCard/PostCard.tsx";

const Blog = () => {
    const url = 'http://146.185.154.90:8000/messages';
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [newAuthor, setNewAuthor] = useState('');

    let interval: null | ReturnType<typeof setInterval> = null;
    let lastMessageDatetime= '' ;




    return (
        <div className='container'>

    );
};

export default Blog;