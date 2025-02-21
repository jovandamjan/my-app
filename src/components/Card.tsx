import React from "react"

export const Card = ({ data }: {
    data: {
        title: string;
        backdrop_path: string;
        overview: string;
        release_date: string;
        video: boolean;
        vote_average: number
    }
}) => {
    return <div><img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
        <h2>{data.title}</h2>
        {data.release_date}
    </div>
}