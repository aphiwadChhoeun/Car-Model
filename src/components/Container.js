import { Suspense } from 'react'
import { Stage, OrbitControls } from '@react-three/drei'
import Car from './Car'

export default function Container({ state }) {
    return (
        <>
            <Stage
                contactShadow
                shadows
                adjustCamera
                intensity={.25}
                environment="studio"
                preset="rembrandt">
                <Suspense fallback={null}>
                    <Car state={state} />
                </Suspense>
            </Stage>
            <OrbitControls makeDefault dampingFactor={0.05}
                minDistance={1}
                maxDistance={5}
                enablePan={false} />
        </>
    )
}