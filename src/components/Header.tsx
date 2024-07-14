import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import IconLock from "./Icon/IconLock";
import { Link } from "react-router-dom";
import IconLogout from "./Icon/IconLogout";

const Header = ({ handleMinimize }: any) => {
  const [username, setUsername] = useState<string>("John Doe");
  const [userEmail, setUserEmail] = useState<string>("johndoe@gmail.com");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const profileRef = useRef<any>(null);
  const profileCardRef = useRef<any>(null);

  const handleLogActions = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOut = (event: Event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target) &&
      profileCardRef.current &&
      !profileCardRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      handleClickOut(e);
    });
    return () => {
      window.removeEventListener("click", (e) => {
        handleClickOut(e);
      });
    };
  }, []);
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
        <div className="relative h-full">
          <div
            className="h-full rounded-full cursor-pointer"
            onClick={handleLogActions}
            ref={profileRef}
          >
            <img
              className="h-full object-cover p-2"
              src="/userprofile.png"
              alt="UserProfile"
            />
          </div>
          <div
            className={`transition-all duration-300 opacity-1 absolute bg-white p-4 right-1 top-14 rounded-lg shadow-lg z-50 ${
              !isOpen && "!opacity-0 hidden"
            }`}
            ref={profileCardRef}
          >
            <div className="profile flex mb-4">
              <div className="rounded-lg w-12 h-12 mr-3">
                <img
                  src="/userprofile.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4>{username}</h4>
                <p className="text-xs text-secondary">{userEmail}</p>
              </div>
            </div>
            <div>
              <Link to={"/"} className="flex items-center my-2">
                <IconLock className="mr-2" />
                Lock Screen
              </Link>
              <Link to={"/"} className="flex items-center text-red-500">
                <IconLogout className="mr-2 rotate-90" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
