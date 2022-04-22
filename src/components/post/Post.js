import React from 'react'

export const Post = ({author,title,description,date}) => {
  return (
    <div className='card text-left m-3 border shadow'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <span className='card-text text-muted'>{author}</span>
            <p className='card-text'>
            {description}
            </p>
            <a className='card-link'>More</a>
        </div>
        <div className='card-footer text-muted'>{date}</div>
    </div>
  )
}
