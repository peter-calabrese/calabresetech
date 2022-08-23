// import Cube from '../components/Cube';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../components/Cube";
const App = () => {


  return (
    <div className='h-screen flex justify-center items-center'>
      <Canvas >
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
        />
        <Cube />
      </Canvas>
    </div>
  );
}

export default App;