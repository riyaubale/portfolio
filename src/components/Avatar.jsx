import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Avatar(props) {
  const { scene } = useGLTF('/models/riya.glb');
  return <primitive object={scene} scale={1.5} position={[-1.5, -1, 0]} {...props} />;
}
