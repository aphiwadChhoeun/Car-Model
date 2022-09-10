import { Canvas } from '@react-three/fiber'
import Container from './components/Container';
import { Loader } from "@react-three/drei"
import { useTweaks } from "use-tweaks"

function App() {
  const state = useTweaks({
    color: {
      value: '#cc3100',
      label: 'Body'
    },
    accent: {
      value: '#000000',
      label: 'Accent'
    },
    plastic: {
      value: '#242424',
      label: 'Plastic'
    },
    exhaust: {
      value: '#b3b3b3',
      label: 'Exhaust'
    },
  }, {
    title: 'Car Customizations'
  })

  return (
    <>
      <Canvas>
        <Container state={state} />
      </Canvas>

      <Loader />

      <span className='credit'>3D model credits <a href="https://skfb.ly/oxGoB" target="_blank" rel="noreferrer">"Lada Niva"</a> by Veisun is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution</a>.</span>
    </>
  );
}

export default App;
