import React from "react";

type Props = {
  top?: any;
  left?: any;
  color?:any;
  right?:any;
  bottom?:any;
  position?:any;
};

export default function Brightness({ top, left,color,right,bottom,position }: Props) {
  return (
    <div
      className={` w-10 h-10 lg:w-20 lg:h-20  blur-3xl animate-pulse `}
      style={{ top, left,right,bottom,background:color,position }}
    ></div>
  );
}