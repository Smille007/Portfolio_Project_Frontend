import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



const Menu = () =>{
    const [posts, setPosts]= useState([]);

    useEffect(() =>{
        fetch('http://localhost:3005/posts')
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch((error) =>console.error('Error fetching data:', error));
    },[])
    return(
<div className='menu'>
    <h1>Other posts you may like</h1>
    {posts.map(post=>(
        <div className='post'key={post.id}>
            <img src={post.img} alt='' />
            <h2>{post.title}</h2>
            <Link className='link' to={`post/${post.id}`}><button>Read more</button>
                </Link>
        </div>
    ))}

</div>
   
    )
}
export default Menu;