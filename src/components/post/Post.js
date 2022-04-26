import React from 'react'

import { Link } from 'react-router-dom'

export const Post = ({_id,author,title,description,date}) => {

  return (
    <div className='card text-left m-3 border shadow'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
        
            <span className='card-text text-muted'>{author}</span>
            <p className='card-text'>
            {description}
            </p>
            <Link className='card-link' to={`/post/${_id}`}>More</Link>
        </div>
        <div className='card-footer text-muted'>{date}</div>
    </div>
  )
}
