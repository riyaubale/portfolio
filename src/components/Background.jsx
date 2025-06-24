import React, { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Background() {
  const points = useMemo(() => {
    return new Float32Array(
      new Array(1000).fill().flatMap(() => [
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
      ])
    );
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial transparent color="#E37383" size={0.05} />
    </Points>
  );
}
