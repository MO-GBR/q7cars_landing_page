import React from 'react'
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className='canvaLoader canvas-loader'></span>
            <p className='loader'>{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader