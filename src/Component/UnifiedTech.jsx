import React from "react";

function UnifiedTech({ name, img }) {
  return (
    <div className="inline-block px-4">
      <div className="flex items-center gap-2 px-4 py-2 border-2 rounded-full">
        <img src={img} alt={name} className="w-8 h-8 rounded-full" />
        <span className="font-exo font-semibold uppercase text-xl">{name}</span>
      </div>
    </div>
  );
}

export default UnifiedTech;
