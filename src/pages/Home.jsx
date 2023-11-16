import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{
    const posts=[
        {
            id:1,
            title:"Hello Lorem",
            desc:"Lorensdsssdddffffff",
            img:'https://media.istockphoto.com/id/1263601084/vector/soccer-ball-symbol-football-ball-icon.jpg?s=1024x1024&w=is&k=20&c=EMCtPvFATLZqUpaklJ2w6GbjCSrVxgWKFKa7DO1S9ck='
    
        },
        {
            id:2,
            title:'Lorem',
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat voluptatum e"
            
            
        }
    ]
    return(
        
<div className='home'>
    <div className='posts'>
        {posts.map(post=>(
            <div className='post' key={post.id}>
                <div className='img'>
                    <img src={post.img} alt ='' />
                    </div>
                    <div className='content'>
                    <Link className='link' to={`post/${post.id}`}>
                    <h1>{post.title}</h1>
                    </Link>
                    <p>{post.desc}</p>
                    <button>Read more</button>
                    </div>
            </div>
        ))}
    </div>
        </div>
    )
}
export default Home;