"use client";
import { Button } from "../../components/ui/button";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div className="container-2xl">
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold">
            Avaya Call Reporting Reinvented
          </h1>
          <p className="text-base">
            Step into the future of call center analytics with Comstice Avaya
            Call Reporting solution. Say goodbye to the need for an Avaya AES
            server and extra licenses for every agent, and say hello to a world
            of insightful analytics, cradle-to-grave reports, and automated
            agent and team reports by email.
          </p>
          <Button className="mt-2 bg-[#4C3DFF]"> Request Demo</Button>
        </div>
        <div>
          <Image
            src="/images/dashboard.png"
            className="w-full ml-4"
            width={100}
            height={100}
            alt="Dashboard"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-16 mb-7">
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex justify-center items-start ">
            <div className="bg-[#EBEDFE] rounded-xl p-1">
              <Image
                src="/icons/download.svg"
                alt="Download"
                width={25}
                height={24}
                priority
              />
            </div>
          </div>
          <div className="col-span-9">
            <h3 className="text-xl mb-2 font-bold">Lower Cost of Ownership</h3>
            <p className="text-base">
              No Avaya AES TSAPI license costs with CMS-Based Reporting and
              real-time feed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex justify-center items-start ">
            <div className="bg-[#EBEDFE] rounded-xl p-1">
              <Image
                src="/icons/grid.svg"
                alt="grid"
                width={25}
                height={24}
                priority
              />
            </div>
          </div>
          <div className="col-span-9">
            <h3 className="text-xl mb-2 font-bold">Higher Agent Occupancy</h3>
            <p className="text-base">
              Real-time and historical agent scorecards to improve agent
              occupancy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex justify-center items-start ">
            <div className="bg-[#EBEDFE] rounded-xl p-1">
              <Image
                src="/icons/lightning.svg"
                alt="lightning"
                width={25}
                height={24}
                priority
              />
            </div>
          </div>
          <div className="col-span-9">
            <h3 className="text-xl mb-2 font-bold">First Contact Resolution</h3>
            <p className="text-base">
              MImInize rebeat callers. handle more customers, convert more
              business.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-16 p-10  bg-[#F3F7FA]">
        <div className="mx-4">
          <Image
            src="/images/graph.png"
            className="w-full ml-4"
            width={100}
            height={100}
            alt="Graph"
          />
        </div>
        <div className="px-10">
          <h1 className="text-6xl font-bold mb-6">Measure, Analyze improve</h1>
          <p className="text-base my-4">
            Visualise your historical performance to understand customer
            behavior, customer patience and the demand for customer service
            using out of the box analvtics features and performance indicators.
          </p>
          <div>
            <div className="flex mt-6">
              <Image
                src="/icons/tick.svg"
                className="mr-4"
                width={30}
                height={100}
                alt="tick"
              />
              <h4 className="text-base font-bold">
                No Avava AES Server Needed
              </h4>
            </div>
            <p className="ml-8">
              Avava CMS data is used for all the reports and charts. No TSAPI
              licenses or AES Server needed.
            </p>
          </div>
          <div>
            <div className="flex mt-8">
              <Image
                src="/icons/tick.svg"
                className="mr-4"
                width={30}
                height={100}
                alt="tick"
              />
              <h4 className="text-base font-bold">
                Scheduled Reports By E-Mail
              </h4>
            </div>
            <p className="ml-8">
              Daily insights by email for team agents and the queues based on
              goals and thresholds
            </p>
          </div>
          <div>
            <div className="flex mt-8">
              <Image
                src="/icons/tick.svg"
                className="mr-4"
                width={30}
                height={100}
                alt="tick"
              />
              <h4 className="text-base font-bold">
                Avava ECH Cradle to Grave Reports
              </h4>
            </div>
            <p className="ml-8">
              Create cradle to grave reports and visual customer journey for
              each call using Avava CMS External Call Historv data.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 my-20 px-20">
        <div>
          <Image
            src="/icons/datasheet.svg"
            width={20}
            height={100}
            alt="datasheet"
            className="mb-4 bg-[#2AD590] rounded-xl"
          />
          <p className="text-xl font-bold mb-3">Download Data Sheet</p>
          <p className="text-sm ">Click here to download data sheet.</p>
        </div>
        <div>
          <Image
            src="/icons/pie.svg"
            width={20}
            height={100}
            alt="datasheet"
            className="mb-4 bg-[#2AD590] rounded-xl"
          />
          <p className="text-xl font-bold mb-3">Access Sample Reports</p>
          <p className="text-sm ">View sample reports and scorecards.</p>
        </div>
        <div>
          <Image
            src="/icons/bargraph.svg"
            width={20}
            height={100}
            alt="datasheet"
            className="mb-4 bg-[#2AD590] rounded-xl"
          />
          <p className="text-xl font-bold mb-3">High-Level Design Guide</p>
          <p className="text-sm ">
            Solution topology, integrations and project plan
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-2 bg-[#F3F7FA] ">
        <div className="mt-20 px-20">
          <h1 className="text-8xl font-bold">Built Based On User Feedback</h1>
          <p className="text-base mt-8">
            Comstice Avaya Call Reporting solution features are created based on
            the user feedback. Reporting requirements vary among businesses. We
            created a universal reporting tool for customer experience that
            displays Avaya and third-party data.
          </p>
          <div className="flex mt-10  items-center">
          <Image
            src="/icons/check-circle.svg"
            width={30}
            height={70}
            alt="check"
            className="mr-4"
          />
          <p className="font-bold text-base">
          Call Tracker and Cradle to Grave Reports
          </p>
          </div>

          <div className="flex mt-5  items-center">
          <Image
            src="/icons/check-circle.svg"
            width={30}
            height={70}
            alt="check"
            className="mr-4"
          />
          <p className="font-bold text-base">
          Retain Detailed Call Center Data Longer
          </p>
          </div>

          <div className="flex mt-5  items-center">
          <Image
            src="/icons/check-circle.svg"
            width={30}
            height={70}
            alt="check"
            className="mr-4"
          />
          <p className="font-bold text-base">
          Integrate Third-Party Data for Universal Reports
          </p>
          </div>

          <div className="flex mt-5  items-center">
          <Image
            src="/icons/check-circle.svg"
            width={30}
            height={70}
            alt="check"
            className="mr-4"
          />
          <p className="font-bold text-base">
          Per-User Reporting Permissions
          </p>
          </div>

          <div className="flex mt-5  items-center">
          <Image
            src="/icons/check-circle.svg"
            width={30}
            height={70}
            alt="check"
            className="mr-4"
          />
          <p className="font-bold text-base">
          Drilldowns from Reports and Charts
          </p>
          </div>
        </div>

        <div style={{padding:'45px'}}>
          <Image
            src="/images/path.png"
            className="w-full ml-4"
            width={100}
            height={100}
            alt="Path"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
