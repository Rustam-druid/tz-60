import React, {useEffect, useState} from 'react';
import {BlogPost} from "../../types";
import PostCard from "../../components/PostCard/PostCard.tsx";

const Blog = () => {
    const url = 'http://146.185.154.90:8000/messages';
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [newAuthor, setNewAuthor] = useState('');

    let interval: null | ReturnType<typeof setInterval> = null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json() as BlogPost[];

                    setPosts(data);
                }

            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchData();
    }, []);






    return (
        <div className='container'>
            <div className="inner-container">
                <div className="Posts">

                </div>
                <div className="Posts-Get">
                    {posts.map(post => (
                        <PostCard datetime={post.datetime} message={post.message} author={post.author} key={post.id}/>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Blog;