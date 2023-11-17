import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';

const Write = () =>{
    const [value, setValue] = useState('');
console.log(value)
    return(
        <div className='add'>
           <div className='content'>
            <input type='text' placeholder='Title'></input>
            <div className='editorContainer'>
               <ReactQuill theme='snow'value={value} onChange={setValue} />;
            </div>
            </div> 
           <div className='menu'>
           <div className='item'>i1</div>
           <div className='item'>i2</div>
           </div>
        </div>
    )
}
export default Write;