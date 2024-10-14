import React from 'react';

interface PostCardProps {
    message: string;
    author:string
    datetime:number | string;
}

const PostCard:React.FC<PostCardProps> = React.memo(({message,author,datetime}) => {


let date = new Date(datetime);
    console.log('[PostCArd] render')
    return (
        <div className="PostCard">
            <div>{date.toDateString()}</div>
            <div><h4>{message}</h4></div>
            <div><p className='Author'>{author}</p></div>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.message === nextProps.message && prevProps.author === nextProps.author && prevProps.datetime !== nextProps.datetime;
});

export default PostCard;