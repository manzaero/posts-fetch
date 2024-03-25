import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage]  = useState(1);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);



    useEffect(()=> {

        const fetchRequest = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const postData = await response.json()
            console.log(postData)
        }
        fetchRequest()
    }, [])
  return (
    <div className="container">
      <h2>
          <div className="title">
              title
          </div>
          <p className="post">
              post
          </p>
      </h2>
    </div>
  );
}

export default App;
