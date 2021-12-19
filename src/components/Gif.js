import React from 'react'
import './Gif.css'

export default function Gif({ title, id, url }) { // singleGif ya no serviria por que llegaria como parametro
    return (
        <a href={`#${id}`} className='Gif'>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url} />
        </a>
    )
}