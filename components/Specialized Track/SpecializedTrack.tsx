"use client";
import React, { useState } from "react";
import QuaterBoxes from "../QuarterBoxes/QuaterBoxes";
import Image from "next/image";
import Web3Img from "../../public/images/metaverse.png";
import AiImg from "../../public/images/ai.png";
import cncImg from "../../public/images/cloud.png";
import AmbImg from "../../public/images/ambient.png";
import GenImg from "../../public/images/genomics.png";
import netImg from "../../public/images/network.png";
import Link from "next/link";

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
      },
    ],
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cncImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraformz",
        number: 5,
      },
    ],
  },
  {
    slug: "amb",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: AmbImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "gen",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: GenImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "net",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: netImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];
const SpecializedTrack = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItem
  );
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
      <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-8">
        <div className="shadow-xl basis-8/12 rounded-xl border border-slate-200 py-8 px-8 h-[550px]">
          <h4 className="text-lg text-primary font-medium">
            Specialized Program
          </h4>
          <h3 className="text-2xl font-semibold">{selectedItemData?.header}</h3>
          <p className="text-xl text-slate-600 mt-2">
            {selectedItemData?.description}
          </p>
            <button className="text-primary text-xl mt-4 flex justify-end gap-x-1 border font-normal rounded-md border-primary py-2 px-5 hover:bg-gray-100 duration-300">
              Enroll Now
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
          <div className="flex flex-col md:flex-row gap-x-4 mt-6">
            {selectedItemData?.quarters.map((item) => (
              <QuaterBoxes
              key={item.number}
                header={item.header}
                description={item.description}
                number={item.number}
                haveBorder={false}
              />
            ))}
          </div>
        </div>
        <div className="gap-x-4 px-4 py-6 basis-4/12 space-y-5">
          {programsData.map((item, i) => {
            return (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex gap-x-4 items-center cursor-pointer"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                  <Image
                    src={item.image}
                    alt={item.header}
                    className="h-24 object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="font-semibold text-md">{item.header}</h3>
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
