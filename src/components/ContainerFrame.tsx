import { FunctionComponent } from "react";

export type ContainerFrameType = {
  className?: string;
};

const ContainerFrame: FunctionComponent<ContainerFrameType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute h-[9.85%] w-[87.69%] top-[27.92%] right-[6.15%] bottom-[62.23%] left-[6.15%] text-left text-sm text-black font-nunito ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute top-[5.18%] left-[18.42%] font-semibold">
            Admin Setting
          </div>
          <div className="absolute h-[20.73%] w-full top-[0%] right-[0%] bottom-[79.27%] left-[0%] rounded-md bg-black opacity-[0.08]" />
          <div className="absolute top-[27.98%] left-[22.81%] font-semibold">
            Users
          </div>
          <div className="absolute h-[1.04%] w-[3.51%] top-[32.64%] right-[80.7%] bottom-[66.32%] left-[15.79%] bg-lightgray" />
          <div className="absolute top-[48.7%] left-[22.81%] font-semibold">
            Change Password
          </div>
          <div className="absolute h-[1.04%] w-[3.51%] top-[53.37%] right-[80.7%] bottom-[45.6%] left-[15.79%] bg-lightgray" />
          <div className="absolute top-[69.43%] left-[22.81%] font-semibold">
            Modify Users
          </div>
          <div className="absolute h-[1.04%] w-[3.51%] top-[74.09%] right-[80.7%] bottom-[24.87%] left-[15.79%] bg-lightgray" />
          <div className="absolute top-[90.16%] left-[22.81%] font-semibold">
            Modify Permission
          </div>
          <div className="absolute h-[1.04%] w-[3.51%] top-[94.82%] right-[80.7%] bottom-[4.15%] left-[15.79%] bg-lightgray" />
        </div>
        <div className="absolute h-[9.84%] w-[7.02%] top-[90.16%] right-[77.19%] bottom-[0%] left-[15.79%] hidden">
          <div className="absolute top-[0%] left-[100%] font-semibold" />
          <div className="absolute h-[10.53%] w-6/12 top-[47.37%] right-[50%] bottom-[42.11%] left-[0%] bg-lightgray" />
        </div>
        <img
          className="absolute h-[8.29%] w-[7.02%] top-[6.22%] right-[4.39%] bottom-[85.49%] left-[88.6%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/frame3@2x.png"
        />
      </div>
      <img
        className="absolute top-[10px] left-[9px] w-6 h-6 overflow-hidden"
        alt=""
        src="/line-duotone--security--key-square-5.svg"
      />
    </div>
  );
};

export default ContainerFrame;
