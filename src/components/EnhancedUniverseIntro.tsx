import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const INTRO_DURATION = 3500;

const EnhancedUniverseIntro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationId: number;
    let sun: THREE.Mesh, planet: THREE.Mesh, planet2: THREE.Mesh, ring: THREE.Mesh;
    let stars: THREE.Points;

    if (mountRef.current) {
      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 16;

      // Starfield
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 400;
      const starVertices = [];
      for (let i = 0; i < starCount; i++) {
        const x = THREE.MathUtils.randFloatSpread(60);
        const y = THREE.MathUtils.randFloatSpread(60);
        const z = THREE.MathUtils.randFloatSpread(60);
        starVertices.push(x, y, z);
      }
      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3 });
      stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // Sun
      const sunGeometry = new THREE.SphereGeometry(3.5, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
      sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun);

      // Sun glow
      const sunGlowGeometry = new THREE.SphereGeometry(4.2, 32, 32);
      const sunGlowMaterial = new THREE.MeshBasicMaterial({ color: 0xfff8b0, transparent: true, opacity: 0.25 });
      const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
      scene.add(sunGlow);

      // Planet 1
      const planetGeometry = new THREE.SphereGeometry(1.2, 32, 32);
      const planetMaterial = new THREE.MeshPhongMaterial({ color: 0x3399ff });
      planet = new THREE.Mesh(planetGeometry, planetMaterial);
      planet.position.x = 7;
      scene.add(planet);

      // Planet 1 ring
      const ringGeometry = new THREE.TorusGeometry(2, 0.12, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.x = 7;
      ring.rotation.x = Math.PI / 2.2;
      scene.add(ring);

      // Planet 2
      const planet2Geometry = new THREE.SphereGeometry(0.8, 32, 32);
      const planet2Material = new THREE.MeshPhongMaterial({ color: 0x9c27b0 });
      planet2 = new THREE.Mesh(planet2Geometry, planet2Material);
      planet2.position.x = -5.5;
      planet2.position.y = 2.5;
      scene.add(planet2);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffd700, 1.2, 100);
      pointLight.position.set(0, 0, 10);
      scene.add(pointLight);

      // Animate
      let angle = 0;
      function animate() {
        angle += 0.012;
        planet.position.x = Math.cos(angle) * 7;
        planet.position.z = Math.sin(angle) * 7;
        ring.position.x = planet.position.x;
        ring.position.z = planet.position.z;
        ring.rotation.z += 0.01;
        planet2.position.x = Math.cos(-angle * 1.2) * 5.5;
        planet2.position.y = Math.sin(-angle * 1.2) * 2.5;
        camera!.position.x = Math.sin(angle / 2) * 2;
        camera!.position.y = Math.cos(angle / 2) * 1.5;
        camera!.lookAt(0, 0, 0);
        stars.rotation.y += 0.0008;
        renderer!.render(scene!, camera!);
        animationId = requestAnimationFrame(animate);
      }
      animate();
    }

    // Fade out after duration
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1200);
    }, INTRO_DURATION);

    // Cleanup
    return () => {
      clearTimeout(timeout);
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ width: '100vw', height: '100vh' }}
    >
      <div ref={mountRef} style={{ position: 'absolute', width: '100vw', height: '100vh' }} />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-fadeIn">Welcome to My Universe</h1>
        <p className="text-lg text-white/80 animate-fadeIn animation-delay-600">Explore the world of creativity and code</p>
      </div>
    </div>
  );
};

export default EnhancedUniverseIntro;
