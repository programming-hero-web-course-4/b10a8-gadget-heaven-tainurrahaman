import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  const { price, product_title } = data;

  return (
    <div>
      <div className="text-center text-white w-5/6 md:w-4/6 lg:w-3/6 mx-auto">
        <h2 className="font-bold text-[24px] md:text-[32px] mb-4">
          Statistics
        </h2>
        <p className="font-normal text-[16px] pb-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="bg-[#1D232A]">
        <h2 className="font-bold text-[32px] py-8">Statistics </h2>
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#2A323C",
            borderRadius: "15px",
            marginBottom: "50px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis dataKey="product_title" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={40} fill="#FE8D59" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
