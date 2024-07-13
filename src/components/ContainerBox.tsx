import { FunctionComponent } from "react";

export type ContainerBoxType = {
  className?: string;
};

const ContainerBox: FunctionComponent<ContainerBoxType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute h-[7.81%] w-[87.69%] top-[38.18%] right-[6.15%] bottom-[54.01%] left-[6.15%] text-left text-sm text-black font-nunito ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute top-[6.54%] left-[18.42%] font-semibold">
            Documentation
          </div>
          <div className="absolute h-[26.14%] w-full top-[0%] right-[0%] bottom-[73.86%] left-[0%] rounded-md bg-black opacity-[0.08]" />
          <div className="absolute top-[35.29%] left-[22.81%] font-semibold">{`API Docs `}</div>
          <div className="absolute h-[1.31%] w-[3.51%] top-[41.18%] right-[80.7%] bottom-[57.52%] left-[15.79%] bg-lightgray" />
          <div className="absolute top-[61.44%] left-[22.81%] font-semibold">
            App Docs
          </div>
          <div className="absolute h-[1.31%] w-[3.51%] top-[67.32%] right-[80.7%] bottom-[31.37%] left-[15.79%] bg-lightgray" />
          <div className="absolute top-[87.58%] left-[22.81%] font-semibold">
            Verification Flow Docs
          </div>
          <div className="absolute h-[1.31%] w-[3.51%] top-[93.46%] right-[80.7%] bottom-[5.23%] left-[15.79%] bg-lightgray" />
        </div>
        <div className="absolute h-[12.42%] w-[7.02%] top-[113.73%] right-[77.19%] bottom-[-26.14%] left-[15.79%] hidden">
          <div className="absolute top-[0%] left-[100%] font-semibold" />
          <div className="absolute h-[10.53%] w-6/12 top-[47.37%] right-[50%] bottom-[42.11%] left-[0%] bg-lightgray" />
        </div>
        <img
          className="absolute h-[10.46%] w-[7.02%] top-[7.84%] right-[4.39%] bottom-[81.7%] left-[88.6%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/frame3@2x.png"
        />
      </div>
      <img
        className="absolute h-[14.9%] w-[8.33%] top-[6.54%] right-[87.72%] bottom-[78.56%] left-[3.95%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-1000001860.svg"
      />
    </div>
  );
};

export default ContainerBox;
