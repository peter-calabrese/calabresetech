import { useState, useRef } from "react";

const Cube = () => {
    const [active, setActive] = useState(false)
    const meshRef = useRef();
    return (

        <group>
            <mesh hov={(e) => console.log('click')} ref={meshRef}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
                <meshBasicMaterial attach="material-0" color="#00FF00" />
            </mesh>
            <mesh onClick={(e) => {
                e.stopPropagation();
                console.log('clicked');
            }} ref={meshRef}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
                <meshBasicMaterial attach="material-1" attachArray="material" color="#FF0000" />
            </mesh >
            <mesh ref={meshRef} onClick={(e) => {
                e.stopPropagation();
                console.log('clicked');
            }}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />

                <meshBasicMaterial attach="material-2" attachArray="material" color="#0000FF" />
            </mesh >
            <mesh ref={meshRef} onClick={(e) => {
                e.stopPropagation();
                console.log('clicked');
            }}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />

                <meshBasicMaterial attach="material-3" attachArray="material" color="#FFFF00" />
            </mesh>
            <mesh ref={meshRef} onClick={(e) => {
                e.stopPropagation();
                console.log('clicked');
            }}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />

                <meshBasicMaterial attach="material-4" attachArray="material" color="#FF00FF" />
            </mesh>
            <mesh ref={meshRef} onClick={(e) => {
                e.stopPropagation();
                console.log('clicked');
            }}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />

                <meshBasicMaterial attach="material-5" attachArray="material" color="#00FFFF" />
            </mesh>

        </group>
    );
}

export default Cube;