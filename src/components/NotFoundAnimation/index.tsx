"use client";
import Image from "next/image";
import capiWow from "@/assets/capi-wow.png";
import tinchoWow from "@/assets/tincho-wow.png";
import pablitoWow from "@/assets/pablito-wow.png";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const images = [
  { src: capiWow, alt: "Capi", width: 320 },
  { src: tinchoWow, alt: "Tincho", width: 200 },
  { src: pablitoWow, alt: "Pablito", width: 200 },
];

export default function NotFoundAnimation() {
  const [image, setImage] = useState<(typeof images)[0] | null>(null);

  useEffect(() => {
    setImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  if (!image) return null;

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, bottom: -300 }}
      animate={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={image.src} alt={image.alt} width={image.width} />
    </motion.div>
  );
}
