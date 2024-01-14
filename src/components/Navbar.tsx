import React from "react";
import { loggedInUser } from "../utils";
import Cookies from "js-cookie";
const Navbar: React.FC = () => {
  const user = loggedInUser();
  const handleLogout = async () => {
    // Cookies.remove("ms-token");
    const getLoginHint = Cookies.get("login-hint");
    window.location.href = `https://amalitech-sso.amalitech-dev.net/logout?login-hint=${getLoginHint}`;
  };
  return (
    <div className="navbar bg-secondary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">HR MANAGER</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            APPS
          </label>
          <div
            tabIndex={0}
            className="mt-3 text-[0.5rem] z-[1] p-2 shadow dropdown-content bg-base-100 rounded-box w-[100px] flex justify-between flex-wrap"
          >
            <a href="http://localhost:5174" target="_blank" className="flex flex-col items-center  justify-center">
              <div className="avatar placeholder">
                <div className="bg-red-700 text-neutral-content rounded-full w-10">
                  <span className="text-xs">IMAP</span>
                </div>
              </div>
            </a>
            <a href="http://localhost:5175" target="_blank" className="flex flex-col items-center  justify-center">
              <div className="avatar placeholder">
                <div className="text-neutral-content rounded-full w-10 bg-amber-950">
                  <span className="text-xs">PR</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <div className="avatar online placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-10">
                <span className="text-xl uppercase">{user?.email.substring(0, 2)}</span>
              </div>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
