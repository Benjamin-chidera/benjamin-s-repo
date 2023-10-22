import logo from "../images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { ArrowCircleDown } from "@phosphor-icons/react";
export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeNavbar = () => {
    // Close the navbar by setting isOpen to false
    setOpen(false);
  };
  return (
    <section>
      {/* <h1 className=" text-white text-center py-2 font-bold">Admin</h1>
      <p className=" text-white text-center py-2 font-bold">BENJAMIN</p> */}
      <div className="blog">
        <div className="flex justify-between items-center p-5">
          <img
            src={logo}
            className="w-14 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
            alt=""
          />

          <div className="hidden md:flex  justify-center items-center text-white gap-10 uppercase">
            <Link to={"/"}>home</Link>
            <Link to={"/blog/politics"}>politics</Link>
            <Link to={"/blog/sport"}>sports</Link>
            <Link to={"/blog/music"}>music</Link>
            <Link to={"/blog/romance"}>romance</Link>
            <Link to={"/admin"}>post</Link>
          </div>

          <div className=" md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
          </div>
        </div>

        {isOpen && (
          <div className=" md:hidden text-center flex flex-col space-y-10 px-5 text-white puff-in-top">
            <Link onClick={closeNavbar} to={"/"}>
              home
            </Link>
            <Link onClick={closeNavbar} to={"/blog/politics"}>
              politics
            </Link>
            <Link onClick={closeNavbar} to={"/blog/sport"}>
              sports
            </Link>
            <Link onClick={closeNavbar} to={"/blog/music"}>
              music
            </Link>
            <Link onClick={closeNavbar} to={"/admin"}>
              post
            </Link>
          </div>
        )}

        <div className="text-white mx-5 font-bold mt-5 space-y-2 text-5xl">
          <h1 className=" font-medium">WELCOME TO</h1>
          <p className=" text-orange-600">BLOG AND NEWS</p>
        </div>
      </div>
    </section>
  );
};
