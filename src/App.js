import { Canvas } from '@react-three/fiber'
import Container from './components/Container';
import ControlsPanel from './components/ControlsPanel';
import useControlOptions from './hooks/useControlOptions';

function App() {
  const [state, setState] = useControlOptions()

  return (
    <>
      <Canvas>
        <Container state={state} />
      </Canvas>
      <ControlsPanel state={state} setState={setState} />

      <span className='credit'>3D model by <a href="https://skfb.ly/oxGoB" target="_blank" rel="noreferrer">"Lada Niva"</a> by Veisun is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution</a>.</span>
    </>
  );
}

export default App;
