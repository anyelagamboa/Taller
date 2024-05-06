import React from 'react'
import { MoviesList } from '../components/MoviesList'
export const NowPlaying = () => {
    return (
        <MoviesList url="top_playing" page={1} />
    )
} 