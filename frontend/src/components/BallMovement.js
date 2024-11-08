import React, { useState, useEffect } from 'react';

const BallMovement = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const newPosition = { ...position };

      switch (event.key) {
        case 'ArrowUp':
          newPosition.y -= 10;
          break;
        case 'ArrowDown':
          newPosition.y += 10;
          break;
        case 'ArrowLeft':
          newPosition.x -= 10;
          break;
        case 'ArrowRight':
          newPosition.x += 10;
          break;
        default:
          break;
      }
      setPosition(newPosition);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position]); // Make sure position is included in the dependencies

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    ></div>
  );
};

export default BallMovement;
