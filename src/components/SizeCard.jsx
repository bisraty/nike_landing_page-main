import React, { useState } from "react";

export default function SizeCard() {
  const [selectIndex, setSelectIndex] = useState(0);
  const sizeList = [
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
  ];
  return (
    <div className='flex flex-wrap gap-3'>
      {sizeList.map((data, index) => {
        return (
          <div
            onClick={() => {
              selectIndex === index ? setSelectIndex() : setSelectIndex(index);
            }}
            className={`border-2 rounded-xl ${
              index === selectIndex ? "border-coral-red" : "border-grey"
            } cursor-pointer  py-4 px-6 md:p-2 min-w-[5vw] max-w-[5vw]  flex justify-center items-center`}
          >
            <h1>{data}</h1>
          </div>
        );
      })}
    </div>
  );
}
