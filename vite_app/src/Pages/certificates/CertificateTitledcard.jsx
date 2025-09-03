import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function CertificateTiltedCard({
  img,
  title,
  by,
  description,
  certificateLink,
  containerHeight = "350px",
  containerWidth = "360px",
  imageHeight = "250px",
  scaleOnHover = 1.05,
  rotateAmplitude = 10,
}) {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex items-center justify-center perspective-[1000px] overflow-visible"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer motion div = Tilt */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner flip wrapper */}
        <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180">
          {/* Front Side */}
          <div
            className="absolute w-full h-full rounded-xl p-5 flex flex-col space-y-2 bg-[#101828]/80 border-2 border-[#101828] items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-white text-center">{title}</h2>
            <h3 className="text-md font-medium text-[#FDC700] text-center">{by}</h3>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full rounded-xl bg-[#101828]/90 border-2 border-[#FDC700] flex flex-col items-center justify-center p-5 space-y-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-xl font-bold text-[#FDC700] text-center">{title}</h2>
            <p className="text-gray-300 text-sm text-center">{description}</p>
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#FDC700] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              View Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </figure>
  );
}
