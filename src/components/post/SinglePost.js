import React from 'react'

import { Link } from 'react-router-dom'

export const SinglePost = ({author,title,description,date}) => {

  return (
    <div className='card text-left m-3 border shadow animate__animated animate__fadeIn'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
        
            <span className='card-text text-muted'>{author}</span>
            <p className='card-text'>
            {description}
            </p>
            <Link className='card-link' to="/" >Back</Link>
        </div>
        <div className='card-footer text-muted'>{date}</div>
    </div>
  )
}
