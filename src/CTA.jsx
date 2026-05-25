import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();

    let animationId;
    const rotation = { x: 0, y: 0 };
    const isDragging = { active: false, x: 0, y: 0 };

    const drawCube = () => {
      ctx.fillStyle = 'rgba(13, 21, 41, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clear for next frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(79, 223, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(13, 21, 41, 0.3)');
      gradient.addColorStop(1, 'rgba(123, 241, 255, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw 3D cube vertices
      const size = 60;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Cube vertices
      const vertices = [
        [-size, -size, -size],
        [size, -size, -size],
        [size, size, -size],
        [-size, size, -size],
        [-size, -size, size],
        [size, -size, size],
        [size, size, size],
        [-size, size, size],
      ];

      // Rotate vertices
      const rotated = vertices.map(v => {
        let x = v[0];
        let y = v[1];
        let z = v[2];

        // Rotation X
        let y1 = y * Math.cos(rotation.x) - z * Math.sin(rotation.x);
        let z1 = y * Math.sin(rotation.x) + z * Math.cos(rotation.x);

        // Rotation Y
        let x2 = x * Math.cos(rotation.y) + z1 * Math.sin(rotation.y);
        let z2 = -x * Math.sin(rotation.y) + z1 * Math.cos(rotation.y);

        // Perspective
        const scale = 400 / (z2 + 300);
        const x3 = x2 * scale + centerX;
        const y3 = y1 * scale + centerY;

        return { x: x3, y: y3, z: z2 };
      });

      // Draw cube edges
      ctx.strokeStyle = 'rgba(79, 223, 255, 0.6)';
      ctx.lineWidth = 2;

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      edges.forEach(edge => {
        const p1 = rotated[edge[0]];
        const p2 = rotated[edge[1]];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw vertices as glowing dots
      ctx.fillStyle = 'rgba(79, 223, 255, 0.8)';
      rotated.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.strokeStyle = 'rgba(79, 223, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Update rotation
      rotation.x += 0.005;
      rotation.y += 0.008;

      animationId = requestAnimationFrame(drawCube);
    };

    const handleResize = () => {
      setCanvasSize();
    };

    const handlePointerDown = (event) => {
      isDragging.active = true;
      isDragging.x = event.clientX;
      isDragging.y = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event) => {
      if (!isDragging.active) return;
      const deltaX = event.clientX - isDragging.x;
      const deltaY = event.clientY - isDragging.y;
      rotation.y += deltaX * 0.003;
      rotation.x += deltaY * 0.003;
      isDragging.x = event.clientX;
      isDragging.y = event.clientY;
    };

    const handlePointerUp = (event) => {
      isDragging.active = false;
      canvas.releasePointerCapture(event.pointerId);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerleave', handlePointerUp);

    drawCube();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerleave', handlePointerUp);
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-3d-model">
          <canvas ref={canvasRef} className="cta-canvas"></canvas>
          <div className="cta-model-glow"></div>
        </div>

        <div className="cta-content">
          <h2 className="cta-eyebrow">Ready to Get Started?</h2>
          <h1 className="cta-heading">
            Let's Build Something
            <span>Extraordinary Together</span>
          </h1>
          <p className="cta-description">
            Whether you need a stunning website, a custom e-commerce solution, or WordPress development, I'm here to bring your vision to life. Let's create something that not only looks amazing but drives real business results.
          </p>

          <div className="cta-features">
            <div className="cta-feature">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>100% Custom Built</h3>
                <p>Tailored to your brand and business needs</p>
              </div>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Responsive & Fast</h3>
                <p>Perfect on every device, lightning quick</p>
              </div>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Full Support</h3>
                <p>Ongoing maintenance and updates included</p>
              </div>
            </div>
          </div>

          <div className="cta-buttons">
            <Link to="/contact" className="btn cta-btn primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
