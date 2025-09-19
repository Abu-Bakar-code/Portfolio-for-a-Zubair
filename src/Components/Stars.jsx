import React, { useEffect, useState } from 'react'

const MovingStars = ({ count = 200, speed = 0.02, direction = 45 }) => {
  const [stars, setStars] = useState([])

  // Convert direction to radians
  const rad = (direction * Math.PI) / 180
  const dx = Math.cos(rad) * speed
  const dy = Math.sin(rad) * speed

  useEffect(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * 100, // in vw
        y: Math.random() * 100, // in vh
        size: Math.random() * 2 + 1, // 1px to 3px
        opacity: Math.random() * 0.8 + 0.2,
        blinkDirection: Math.random() > 0.5 ? 1 : -1
      })
    }
    setStars(arr)
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prev =>
        prev.map(s => {
          let newOpacity = s.opacity + 0.005 * s.blinkDirection
          if (newOpacity > 1) { newOpacity = 1; s.blinkDirection = -1 }
          if (newOpacity < 0.2) { newOpacity = 0.2; s.blinkDirection = 1 }

          let newX = s.x + dx
          let newY = s.y + dy

          // Wrap around screen edges
          if (newX > 100) newX = 0
          if (newX < 0) newX = 100
          if (newY > 100) newY = 0
          if (newY < 0) newY = 100

          return { ...s, x: newX, y: newY, opacity: newOpacity }
        })
      )
    }, 20) // ~50fps
    return () => clearInterval(interval)
  }, [dx, dy])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: `rgba(255,255,255,${star.opacity})`,
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>
  )
}

export default MovingStars;
