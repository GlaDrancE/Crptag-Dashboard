import { Menu } from "lucide-react";

const Header = ({ handleMinimize }: any) => {
  return (
    <header className="h-[50px] w-full fixed inset-0 flex justify-between items-center z-50 bg-white shadow-[0px_0px_25px_rgba(94,_92,_154,_0.1)]">
      <div className="h-full flex items-center justify-between w-full">
        <div className="px-2 flex items-end ">
          <img src="\logo.svg" alt="" className="pr-4" />
          <button
            onClick={handleMinimize}
            className="rounded-full p-1 bg-secondary/20 cursor-pointer"
          >
            <Menu className="w-5 h-5 " />
          </button>
        </div>
        <img className="h-full p-2" src="/userprofile.png" alt="UserProfile" />
      </div>
    </header>
  );
};

export default Header;
