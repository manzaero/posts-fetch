import React, {useEffect, useState} from 'react';
import './App.css';
import {Post} from "./Post";

function App() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then(response => response.json())
            .then(data => {
                // @ts-ignore
                setPosts(prevPosts => [...prevPosts, ...data])
                console.log(data)
            });
    }, [page])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
        {
            if (page < 5) {
                setPage(prevPage => prevPage + 1)
            }
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }
  return (
    <div className="container">
        {
            posts.map((post, i) => (
                <Post post={post} key={i}/>
            ))
        }
        {page < 5 && (
            <p>Loading more...</p>
        )}
        {
            page >= 5 && (
                <button onClick={loadMore}>load</button>
            )
        }
    </div>
  );
}

export default App;
