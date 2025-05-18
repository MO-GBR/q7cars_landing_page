import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Components/Loader';
import { RGBA_ASTC_4x4_Format } from 'three';

const Car = () => {
    const car = useGLTF("CarModel/scene.gltf")
    return (
        <primitive object = {car.scene} scale={1.2} position-y={-1} position-x={4} rotation-y={0} />
    )
};

const CarCanva = () => {
    const w = window.innerWidth;
    let p = w <= 768 ? [4, 20, -5] : [4, 10, -5];
    console.log(w);
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: p
            }}
        >
            <ambientLight />
            <directionalLight color="white" position={[0, 10, 20]} />

            <Suspense fallback = {<Loader />}>
                <OrbitControls
                    // autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Car />
                <Preload all />
            </Suspense>
        </Canvas>
    )
}


export default CarCanva