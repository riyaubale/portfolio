import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import Avatar from './components/Avatar';
import Navigation from './components/Navigation';
import Background from './components/Background';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Background />
        <Avatar />
        <Navigation />

        <OrbitControls enableZoom={false} />

        <Text position={[1.2, 1, 0]} fontSize={0.4} color="#E37383">
          print("Hi, I'm Riya!")
        </Text>

        <Html position={[1.2, 0.2, 0]} center>
          <input
            type="text"
            placeholder="Search about me..."
            className="px-4 py-2 rounded-lg shadow-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            style={{ fontSize: '14px' }}
          />
        </Html>
      </Canvas>
    </div>
  );
}
