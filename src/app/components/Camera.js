'use client'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Resize } from '@react-three/drei'

export default function Camera() {
    const gltf = useLoader(GLTFLoader, "/camera.glb")

    return (
        <Canvas>
            <directionalLight intensity={100} position={[0,1,0]}/>
            <Resize scale={4}>
                <primitive object={gltf.scene} position={[0,-0.05,0]}/>
            </Resize>
            <OrbitControls autoRotate={true} target={[0,0,0]}/>
        </Canvas>
    )
}