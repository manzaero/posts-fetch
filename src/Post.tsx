import React from "react";
type PostProps = {
    post:{
        id: number,
        title: string,
        body: string
    };
}

export const Post: React.FC<PostProps> = ({post}) => {
    return (
        <div className="post" >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};