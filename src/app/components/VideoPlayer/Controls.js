import React from "react";

function Controls({ left, right }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      {/* left */}
      <div className="flex items-center justify-start gap-4">{left}</div>

      {/* right */}
      <div className="flex items-center justify-end gap-4">{right}</div>
    </div>
  );
}

export default Controls;
