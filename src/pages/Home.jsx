import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'




const Home = () =>{
    const [posts, setPosts]= useState([]);

    useEffect(() =>{
        fetch('http://localhost:3005/posts')
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch((error) =>console.error('Error fetching data:', error));
    },[])

    return(
        
<div className='home'>
    <div className='posts'>
        {posts.map(post=>(
            <div className='post' key={post.id}>
            <div className='img'>
                <img src={post.img} alt ='' />
                </div>
                <div className='content'>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <Link className='link' to={`post/${post.id}`}><button>Read more</button>
                </Link>
                </div>
        </div>
        ))}
    </div>
        </div>
    )
}
export default Home;