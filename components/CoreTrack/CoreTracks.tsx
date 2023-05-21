import React from "react";
import Button from "../Button/Button";
import QuaterBoxes from "../QuarterBoxes/QuaterBoxes";

const CoreTrackData = [
  {
    header: "Quarter I",
    discription: "CS-101: Object-Oriented Programming using Typescript",
    number: 1,
  },
  {
    header: "Quarter II",
    discription:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    discription:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];
const CoreTracks = () => {
  const h4 = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-16 lg:mt-28">
      <div className="max-w-screen-sm">
        <h4 className="text-teal-700 font-semibold mt-4 text-lg">
          Program of Studies
        </h4>
        <h2 className="text-4xl font-bold whitespace-pre-line">{h4}</h2>
        <p className="mt-3 text-xl text-slate-600">
          Every participant of the program will start by completing the
          following three core courses:
        </p>
        <div className="mt-5">
          <Button text={"Learn More"} />
        </div> 
      </div>

      <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
        {CoreTrackData.map((items, i) => {
          return (
        
              <QuaterBoxes key={items.number}
              description={items.discription}
              header={items.header} 
              number={i +1}/>

          );
        })} 
      </div>
    </section>
  );
};
export default CoreTracks;
