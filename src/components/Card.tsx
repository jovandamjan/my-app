import React from "react"

export const Card = ({ data }) => {
    console.log('data', data);
    return <div><img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
        <h2>{data.title}</h2>
    </div>
}