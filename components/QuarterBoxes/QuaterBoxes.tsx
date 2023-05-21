import React, { FC } from "react"

interface IProps{
    header: string;
    description: string;
    number: number;
    haveBorder? : boolean
}
const QuaterBoxes:FC<IProps> = ({header,description,number,haveBorder = true}) => {
  return (
    <div className={`flex flex-col flex-1 justify-center rounded-md relative px-8 py-16 ${haveBorder === true ? "border": "" }`}>
    <h4 className="text-lg font-bold">{header}</h4>
    <p className="mt-2 text-slate-600 z-0">{description}</p>
    <span className="absolute -top-8 right-10 text-[170px] font-bold -z-10 text-gray-200">
      {number}
    </span>
  </div>
  )
}
export default QuaterBoxes