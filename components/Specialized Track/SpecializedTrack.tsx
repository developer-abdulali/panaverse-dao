"use client"
import React, { useState } from "react";
import QuaterBoxes from "../QuarterBoxes/QuaterBoxes";
import Image from "next/image";
import Web3Img from "../QuarterBoxes/metaverse.png";
import AiImg from "../QuarterBoxes/ai.png";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Web3Img,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V", 
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image: AiImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AIss-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Ai-361: Deep Learning and MLOps",
        number: 5,
      }
    ]
  }
];
const SpecializedTrack = () => {
  const [selectedItem, setSelectedItem] = useState("wmd")

  const selectedItemData = programsData.find((item)=>item.slug === selectedItem)
  
  console.log(selectedItem)
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <div>
        <h4 className="text-5xl font-bold whitespace-pre-line">
          Specialized Tracks:
        </h4>
        <p className="mt-2 text-slate-600 z-0 max-w-screen-sm">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
        </p>
      </div>
      <div className="mt-10 flex gap-x-4 gap-y-8">
        <div className="shadow-xl basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
          <h4 className="text-lg text-primary font-medium">
            Specialized Program
          </h4>
          <h3 className="text-2xl font-semibold">
          {selectedItemData?.header}
          </h3>
          <p className="text-xl text-slate-600 mt-2">
          {selectedItemData?.description}
          </p>
          <button className="text-primary text-xl mt-4 underline flex justify-end gap-x-1">
            Learn More
            <svg
              className="mt-2.5"
              width="15"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                stroke="#00616C"
                strokeWidth="2"
              />
            </svg>
          </button>
          <div className="flex gap-x-4 mt-6">
            {
              selectedItemData?.quarters.map((item)=>(
                <QuaterBoxes
                header={item.header}
                description={item.description}
                number={item.number}
                haveBorder={false}
              />
              ))
            }
          
          </div>
        </div>
        <div className="gap-x-4 px-4 py-6 basis-4/12 space-y-5 bg-slate-200">
          {programsData.map((item, i) => {
            return (
              <div onClick={()=> setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                  <Image src={item.image} alt={item.header} className="h-24 object-cover rounded-md"/>
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="font-semibold text-md">
                   {item.header}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializedTrack;
