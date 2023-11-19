import React from 'react'


const Menu = () =>{
    const posts=[
        {
            id:1,
            title:"Hello Lorem",
            desc:"This week the map got its first update in more than a decade, and the outlook for many gardens looks warmer. The 2023 map is about 2.5 degrees Fahrenheit warmer than the 2012 map across the contiguous U.S., says Chris Daly, director of the PRISM Climate Group at Oregon State University that jointly developed the map with the USDA.",
            img:'https://media.istockphoto.com/id/1263601084/vector/soccer-ball-symbol-football-ball-icon.jpg?s=1024x1024&w=is&k=20&c=EMCtPvFATLZqUpaklJ2w6GbjCSrVxgWKFKa7DO1S9ck='
    
        },
        {
            id:2,
            title:'Lorem',
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat voluptatum e"
            
            
        }
    ]
    return(
<div className='menu'>
    <h1>Other posts you may like</h1>
    {posts.map(post=>(
        <div className='post'key={post.id}>
            <img src={post.img} alt='' />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
    ))}

</div>
   
    )
}
export default Menu;