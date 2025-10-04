/**
 * Overview Component - Statistics display showing projects, blogs, and article views
 * Features animated counters and visual statistics for portfolio metrics
 */

import React from "react";
import { Plus } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Overview = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex justify-center items-center my-[60px] overview">
      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-3 mx-auto w-full gap-5 ${
          inView ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""
        } `}
      >
        <div className="flex flex-col justify-center items-center shadow pb-5  ">
          <span className="flex text-[48px] font-semibold text-[#CE5A67] justify-center items-center ">
            <h1>4</h1>
            <Plus size={48} color="#CE5A67" strokeWidth={3} />
          </span>
          <h1 className="text-[28px] text-[#2f2e41] ">Projects</h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow pb-5">
          <span className="flex text-[48px] font-semibold text-[#CE5A67] justify-center items-center">
            <h1>3</h1>
            <Plus size={48} color="#CE5A67" strokeWidth={3} />
          </span>
          <h1 className="text-[28px] text-[#2f2e41] ">Blogs</h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow pb-5">
          <span className="flex text-[48px] font-semibold text-[#CE5A67] justify-center items-center">
            <h1>200</h1>
            <Plus size={48} color="#CE5A67" strokeWidth={3} />
          </span>
          <h1 className="text-[28px] text-[#2f2e41] ">Article Views</h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
