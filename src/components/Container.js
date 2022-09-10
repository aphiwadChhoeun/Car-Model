import { Suspense } from 'react'
import { Stage, OrbitControls } from '@react-three/drei'
import Car from './Car'

export default function Container({ state }) {
    return (
        <>
            <Stage
                contactShadow={{
                    far: 3,
                    blur: .8,
                    scale: 20
                }}
                shadows
                adjustCamera
                intensity={.25}
                environment="studio"
                preset="rembrandt">
                <Suspense fallback={null}>
                    <Car state={state} />
                </Suspense>
            </Stage>

            <OrbitControls makeDefault
                autoRotate={true}
                autoRotateSpeed={.25}
                dampingFactor={0.05}
                minDistance={1}
                maxDistance={5}
                enablePan={false} />
        </>
    )
}