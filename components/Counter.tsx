import React, { useEffect } from 'react'
import Image from 'next/image'
import { photos } from '../src/photos'
import { moveAvatars } from '../src/moveAvatars'

type CounterProps = {
  remainingDays: number
}

const Counter = ({ remainingDays }: CounterProps) => {
  useEffect(() => {
    moveAvatars()
  }, [])

  return (
    <div>
      <div>
        {photos.map((photo) => (
          <div
            className="photo_container  rotate-scale-down"
            key={photo.slice(5)}
          >
            <Image
              src={photo}
              className="photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="photo"
            />
          </div>
        ))}
      </div>

      <p className="title">Viajamos en {remainingDays} dias</p>
    </div>
  )
}

export default Counter
