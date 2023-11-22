import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('')
  console.log(value)
  const [post, setPost] = useState({});
const [params] = useSearchParams();
const id= params.get(`post`)


  useEffect(() => {
    fetch(`http://localhost:3005/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.error('Error fetching post data:', error));
  }, [id]);

 // publish post
 const handlePublish = async () => {
  try {
    const response = await fetch("http://localhost:3005/posts/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'title', 
        description: 'desc',
        img: 'txtx', 
        registration_confirmed: true,
      }),
    });

    if (response.ok) {
      console.log('Post published successfully');
    } else {
      console.error('Error publishing post:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

//update post
const handleUpdate = async () => {
  try {
    const response = await fetch(`http://localhost:3005/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Your Updated Post Title',
        description: 'Your Updated Post Description',
        img: 'Your Updated Image URL',
        date_time: new Date().toISOString(),
        user_id: 1, 
        registration_confirmed: true,
      }),
    });
    if (response.ok) {
    } else {
      console.error('Error posting post: Post was not published');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b>
          </span>
          <span>
            <b>Visibility: </b>
          </span>
          <input style={{ display: 'none' }} type='file' id='file' name='' />
          <label htmlFor='file'>Upload Image</label>
          <div className='buttons'>
            <button onClick={handlePublish} className={status === 'public' ? 'active' : ''}>Post</button>
            <button onClick={handleUpdate} className='active'>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art'/>
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
          <input type='radio' name='cat' value='science' id='science' />
          <label htmlFor='science'>Science</label></div>
          <div className='cat'>
          <input type='radio' name='cat' value='technology' id='technology' />
          <label htmlFor='technology'>Technology</label></div>
          <div className='cat'>
          <input type='radio' name='cat' value='cinema' id='cinema' />
          <label htmlFor='cinema'>Cinema</label></div>
          <div className='cat'>
          <input type='radio' name='cat' value='design' id='design' />
          <label htmlFor='design'>Design</label></div>
          <div className='cat'>
          <input type='radio' name='cat' value='food' id='food' />
          <label htmlFor='food'>Food</label></div>
       
        </div>
      </div>
    </div>
  );
};

export default Write;
