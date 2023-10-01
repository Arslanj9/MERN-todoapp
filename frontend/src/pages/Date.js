import React, { useState, useEffect } from "react";

function LiveDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1 second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="flex flex-col justify-center items-center w-full my-6">
      <h1 className="text-3xl">{formattedDate.split(",")[0]}</h1>
      <p className="text-[10px] mt-2 opacity-40">
        {formattedDate.split(",")[1]}, {formattedDate.split(",")[2]}
      </p>
    </div>
  );
}

export default LiveDate;
