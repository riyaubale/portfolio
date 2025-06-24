import React from 'react';
import { Html } from '@react-three/drei';

export default function Navigation() {
  return (
    <Html position={[0, -2.2, 0]} center>
      <div style={{ display: 'flex', gap: '1rem', fontSize: '14px' }}>
        <a href="#projects" style={{ color: '#333' }}>Projects</a>
        <a href="#experience" style={{ color: '#333' }}>Experience</a>
        <a href="#about" style={{ color: '#333' }}>About</a>
        <a href="#contact" style={{ color: '#333' }}>Contact</a>
      </div>
    </Html>
  );
}
