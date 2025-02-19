import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const tailwindColorMap = {
  "red-600": "#dc2626",
  "blue-500": "#3b82f6",
  "amber-400": "#fbbf24",
  "purple-900": "#4c1d95",
  "green-500": "#22c55e",
  "gray-400": "#9ca3af",
};

function GalleryItem({ id, borderColor }) {
  const strokeColor = tailwindColorMap[borderColor] || "#9ca3af";
  const pathRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.fromTo(
      path,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const number = numRef.current;

    number.addEventListener("mouseenter", () => {
      gsap.to(number, { y: -5, duration: 0.3, ease: "power2.out" });
    });

    number.addEventListener("mouseleave", () => {
      gsap.to(number, { y: 0, duration: 0.3, ease: "power2.out" });
    });

    return () => {
      number.removeEventListener("mouseenter", () => {});
      number.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center w-30 h-20`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 229 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M122.919 9.63053C98.0766 9.63053 73.2344 9.63053 48.3923 9.63053C38.6824 9.63053 29.7706 13.4858 22.2729 19.484C18.8497 22.2226 18.9044 34.0318 18.7538 38.096C18.4976 45.0139 18.5011 52.7415 17.268 59.5233C16.927 61.3989 14.5713 64.6877 13.4361 66.2486C12.255 67.8727 13.412 71.332 12.8105 73.2868C10.5273 80.7073 10.0471 88.9539 6.78897 96.1217C3.37613 103.63 4.67752 113.632 4.67752 121.694C4.67752 128.333 3.59181 135.961 5.77235 142.261C9.95486 154.344 25.3022 156.024 37.0531 156.024C50.7484 156.024 65.4805 158.441 77.8744 164.47C91.8314 171.26 102.008 177.139 117.288 177.139C129.057 177.139 139.326 168.253 150.368 165.8C162.105 163.191 171.79 161.655 184.072 161.655C197.123 161.655 203.224 149.057 204.483 137.725C206.875 116.2 217.765 94.0065 223.564 73.1304C227.89 57.5586 217.194 41.061 210.505 27.9298C203.568 14.3136 193.631 21.6181 182.039 16.9815C175.064 14.1913 167.69 15.5913 160.847 11.742C155.138 8.53103 148.351 8.26493 142.626 5.72044C138.813 4.02609 131.984 5.40763 127.845 5.40763C122.597 5.40763 118.696 10.4612 118.696 4"
          stroke={strokeColor}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      <span ref={numRef} className="absolute text-lg font-laquer text-gray-700">
        {id}
      </span>
    </div>
  );
}

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  borderColor: PropTypes.string,
};

export default GalleryItem;
