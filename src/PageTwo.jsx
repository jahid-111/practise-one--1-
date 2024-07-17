import React, { useEffect, useState } from "react";

const PageTwo = () => {
  const [value, setValue] = useState();
  // console.log("Input -: ", value);

  useEffect(() => {
    const res = value;
    console.log(" ▶️ Current Typing : ", value);
    const t = setTimeout(() => {
      console.log(" 🟢 Final result ::", res);
    }, 2000);

    return () => {
      console.log(" 🔴 Return Before ", t);
      clearTimeout(t);
    };
  }, [value]);

  function handleClick() {
    // console.log("handleClick");
    // console.log(value);
  }

  return (
    <div className=" bg-green-400 h-screen text-center ">
      <div className=" flex flex-col items-center justify-center w-96">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
        <button onClick={handleClick} className=" bg-red-600 p-3 text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
