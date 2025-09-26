import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import * as THREE from 'three';

const PLANET_COUNT = 9;
const PLANET_COLORS = [
  '#b0e0e6', // Mercury
  '#deb887', // Venus
  '#4682b4', // Earth
  '#ff6347', // Mars
  '#ffd700', // Jupiter
  '#adff2f', // Saturn
  '#00bfff', // Uranus
  '#9c27b0', // Neptune
  '#ff69b4'  // Pluto (for fun)
];

interface UniverseSolarIntroProps {
  onFinish: () => void;
  onlyOnePlanet?: boolean;
}

const UniverseSolarIntro: React.FC<UniverseSolarIntroProps> = ({ onFinish, onlyOnePlanet }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1200);
    }, 3200);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Sun
    const sunGeometry = new THREE.SphereGeometry(3.5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Glow effect for sun
    const sunGlowMaterial = new THREE.MeshBasicMaterial({ color: 0xfff700, transparent: true, opacity: 0.3 });
    const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(4.5, 32, 32), sunGlowMaterial);
    scene.add(sunGlow);

    // Planets
    const planets: THREE.Mesh[] = [];
    if (onlyOnePlanet) {
      // Show only Earth
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color: '#4682b4' });
      const earth = new THREE.Mesh(geometry, material);
      scene.add(earth);
      planets.push(earth);
    } else {
      for (let i = 0; i < PLANET_COUNT; i++) {
        // Give each planet a unique size
        const sizes = [0.5, 0.7, 0.9, 0.8, 1.5, 1.3, 1.1, 1.1, 0.6];
        const geometry = new THREE.SphereGeometry(sizes[i], 32, 32);
        const material = new THREE.MeshPhongMaterial({ color: PLANET_COLORS[i % PLANET_COLORS.length] });
        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);
        planets.push(planet);
      }
    }

    // Animation
    let frame = 0;
    function animate() {
      frame += 0.015;
      sun.rotation.y += 0.005;
      sunGlow.rotation.y += 0.005;
      if (onlyOnePlanet) {
        // Earth orbits the sun
        const earth = planets[0];
        const angle = frame;
        const radius = 9;
        earth.position.x = Math.cos(angle) * radius;
        earth.position.y = Math.sin(angle) * radius * 0.7;
        earth.position.z = Math.sin(angle * 0.7) * 1.5;
        earth.rotation.y += 0.01;
      } else {
        planets.forEach((planet, idx) => {
          const angle = frame + idx * (Math.PI * 2 / PLANET_COUNT);
          const radii = [5, 7, 9, 11, 13, 15, 17, 19, 21];
          const radius = radii[idx];
          planet.position.x = Math.cos(angle) * radius;
          planet.position.y = Math.sin(angle) * radius * 0.7;
          planet.position.z = Math.sin(angle * 0.7) * 1.5;
          planet.rotation.y += 0.01 + idx * 0.005;
        });
      }
      renderer.render(scene, camera);
      if (visible) requestAnimationFrame(animate);
    }
    animate();
    // Cleanup
    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [visible]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ width: '100vw', height: '100vh' }}
    >
      <audio
        src="/varun_intro.mp3"
        autoPlay
        preload="auto"
        style={{ display: 'none' }}
      />
      <div ref={mountRef} style={{ position: 'absolute', width: '100vw', height: '100vh' }} />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-fadeIn">Welcome to My Universe</h1>
        <p className="text-lg text-white/80 animate-fadeIn animation-delay-600">Explore the solar system of creativity</p>
        <div className="mt-6 animate-fadeIn animation-delay-1200">
          <span className="text-2xl font-semibold text-blue-200 drop-shadow-lg bg-black/40 px-4 py-2 rounded-xl">
            Hello, I'm Varun M C, Software Developer & MCA Graduate
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniverseSolarIntro;
