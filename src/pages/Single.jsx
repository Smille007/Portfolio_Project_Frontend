import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3005/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching post data:', error));
  }, [id]);

  // delete post
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3005/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
      } else {
        console.error('Error deleting post: Post was not deleted');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };


  return (
    <div className='single'>
      <div className='content'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img src={post.img} alt={post.title} />
            <div className='user'>
              <img
                src='https://media.istockphoto.com/id/1169241965/photo/mature-hispanic-man-wearing-plaid-shirt.jpg?s=2048x2048&w=is&k=20&c=TzR0Wid7ipwvhRGRBEt7DcqEaMXlYYR2eROeG7MZ1pw='
                alt='User'
              />
              <div className='info'>
                <span>Johnny</span>
                <p>Posted 2 days ago</p>
                <div className='edit'>
                  <Link to={`/write?edit=${id}`} className='material-symbols-outlined'>
                    edit
                  </Link>
                  <span className='material-symbols-outlined' onClick={handleDelete}>
                    delete
                  </span>
                </div>
              </div>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </>
        )}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
