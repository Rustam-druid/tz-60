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



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const data = new URLSearchParams();
            data.set('message', newMessage);
            data.set('author', newAuthor);

            const response = await fetch(url, {
                method: 'post',
                body: data,
            });

            if (response.ok) {
                const data = await response.json() as BlogPost;
                setPosts((prevPosts) => [...prevPosts, data]);
                setNewMessage('');
            }
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
        }
    };


    return (
        <div className='container'>
            <div className="inner-container">
                <div className="Posts">
                    <form onSubmit={handleSubmit}>
                        <div className="input-div">
                            <input
                                type="text"
                                placeholder="Введите сообщение"
                                value={newMessage}
                                onChange={(event) => setNewMessage(event.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Введите автора"
                                value={newAuthor}
                                onChange={(event) => setNewAuthor(event.target.value)}
                            />
                        </div>

                        <button type="submit">Отправить</button>
                    </form>
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