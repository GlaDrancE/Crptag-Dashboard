import { BsThreeDots } from "react-icons/bs";
import { HiPlusSm } from "react-icons/hi";
const ActivityLog = () => {
  const activities = [
    {
      activity: "New Batch Tag Upload",
      date: "27 Aug, 2023",
      user: "Admin Username",
    },
    {
      activity: "New User Added",
      date: "26 Aug, 2023",
      user: "Admin Username",
    },
    {
      activity: "Password Changed",
      date: "24 Aug, 2023",
      user: "Admin Username",
    },
    {
      activity: "New Admin User Added",
      date: "02 Mar, 2023",
      user: "Admin Username",
    },
    {
      activity: "Created New Client",
      date: "10 Mar, 2023",
      user: "Admin Username",
    },
  ];

  return (
    <div className="p-2 bg-white shadow-md w-full rounded-lg nunito-normal">
      <div className="w-full border-b">
        <h3 className="p-2 mb-2">Activity Log</h3>
      </div>
      <ul>
        {activities.map((a, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center">
              <div className="rounded-full bg-primary p-2 flex items-center justify-center">
                <HiPlusSm color="white" className="w-5 h-5" />
              </div>
              <div className="flex flex-col w-full ml-1">
                <div className=" text-sm">
                  {a.activity}:{" "}
                  <span className="text-green-500 ">{a.user}</span>
                </div>
                <p className="font-bold text-xs text-slate-400">{a.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
