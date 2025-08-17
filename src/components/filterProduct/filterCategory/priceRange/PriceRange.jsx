import { useState } from "react";

export default function PriceRange() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000000);

  const minLimit = 0;
  const maxLimit = 3000000;
  const step = 100000;

  return (
    <div className="w-[90%] mt-3 max-w-md mx-auto">
      {/* Thanh trượt */}
      <div className="relative h-1 bg-blue-300 rounded-md">
        {/* Thanh highlight nằm giữa 2 giá trị */}
        <div
          className="absolute h-1 bg-blue-600 rounded-md"
          style={{
            left: `${(min / maxLimit) * 100}%`,
            right: `${100 - (max / maxLimit) * 100}%`,
          }}
        ></div>

        {/* Input min */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={min}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), max - step);
            setMin(val);
          }}
          className="absolute w-full -top-2 appearance-none bg-transparent pointer-events-none"
        />

        {/* Input max */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={max}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), min + step);
            setMax(val);
          }}
          className="absolute w-full -top-2 appearance-none bg-transparent pointer-events-none"
        />
      </div>

      {/* Giá trị hiển thị */}
      <div className="flex justify-between mt-6 text-md font-medium">
        <span>{min.toLocaleString()}đ</span>
        <span>{max.toLocaleString()}đ</span>
      </div>

      {/* Style riêng cho thumb */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 9999px;
          background: #2563eb; /* blue-600 */
          cursor: pointer;
          pointer-events: all;
          border: 2px solid white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 9999px;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}
