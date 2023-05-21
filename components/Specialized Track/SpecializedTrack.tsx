import React from "react";
import QuaterBoxes from "../QuarterBoxes/QuaterBoxes";


export const programsData = [
    {
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description : "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        quarters : [
            {
                header : "Quarter IV",
                description : "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number : 4,
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description : "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        quarters : [
            {
                header : "Quarter V",
                description : "AI-361: Deep Learning and MLOps",
                number : 5,
            }
        ]
    }
]

const SpecializedTrack = () => {
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
          <h4 className="text-lg text-primary font-medium">Specialized Program</h4>
          <h3 className="text-2xl font-semibold">
            Web 3.0 (Blockchain) and Metaverse Specialization
          </h3>
          <p className="text-xl text-slate-600 mt-2">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
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
            <QuaterBoxes
              header="Quarter IV"
              description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
              number={4}
              haveBorder={false}
            />
            <QuaterBoxes
              header="Quarter V"
              description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
              number={5}
              haveBorder={false}
            />
          </div>
        </div>
        <div className="gap-x-4 px-4 py-6 basis-4/12 bg-slate-200">
          {
            programsData.map((item, i)=>{
                return(
                    <div key={i} className="flex gap-x-4 items-center cursor-pointer">
                    <div>
                      <div className="w-20 h-16 rounded bg-red-300"></div>
                    </div>
                    <div>
                      <h4 className="text-primary font-medium">Specialized Program</h4>
                      <h3 className="font-semibold text-md">
                        Web 3.0 (Blockchain) and Metaverse Specialization
                      </h3>
                    </div>
                  </div>
                )
            })
          }
         
        </div>
      </div>
    </section>
  );
};

export default SpecializedTrack;
