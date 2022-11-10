// import "./styles.css";
import Globe from "react-globe.gl";
import { useEffect, useState } from "react";

const colors = ["purple", "pink", "blue"];

export default function EarthGlobe() {
  const [arcsData, setArcsData] = useState([]);

  // Gen random data
  const archLength = 20;

  useEffect(() => {
    setArcsData(
      [...Array(archLength).keys()].map(() => ({
        startLat: 45.464664,
        startLng: 9.18854,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [
          colors[Math.round(Math.random() * (colors.length - 1))],
          colors[Math.round(Math.random() * (colors.length - 1))]
        ]
      }))
    );
  }, []);

  return (
    <Globe
      globeImageUrl="/images/earth-night.jpg"
      arcsData={arcsData}
      arcColor={"color"}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 2000 + 1500}
      arcStroke={0.7}
    />
  );
}
