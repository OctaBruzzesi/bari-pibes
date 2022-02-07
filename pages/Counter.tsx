import React, { useState, useEffect } from "react";
import Image from "next/image";
import { photos } from "../src/photos";
import { moveAvatars } from "../src/moveAvatars";

const Counter = () => {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    const s = setTimeout(() => {
      const now = new Date().getTime();
      const trip = new Date("3/4/2022").getTime();
      const diff = trip - now;
      const diffCount = Math.floor(diff / (1000 * 60 * 60 * 24));

      setCounter(diffCount.toString());
    }, 1000);

    return () => clearTimeout(s);
  });

  useEffect(() => {
    moveAvatars()
  }, [])

  return (
    <div>
      {photos.map((photo) => (
        <div className="photo_container" key={photo.slice(5)}>
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
      <p className="title">Viajamos en {counter} días</p>
    </div>
  );
};

export default Counter;
