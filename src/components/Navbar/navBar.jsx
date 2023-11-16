import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { Button } from "../ui/button";
import { NavDialog } from "./navDialog";
import StarsCanvas from "../canvas/Stars";
const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 700;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(open);
  const navLink = [
    {
      id: 1,
      name: "Home",
      link: "/home",
    },

    {
      id: 3,
      name: "Our Services",
      link: "/our-services",
    },
    {
      id: 4,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      name: "Join Us",
      link: "/join-us",
    },
  ];

  return (
    <div
      className={`flex justify-between w-full items-center transition-all duration-500 ease-in-out z-40 px-24 bg-black ${
        isScrolled ? "p-1" : "p-8"
      } fixed`}
    >
      <div>
        <img src={logo} alt="" className=" w-32 object-contain" />
      </div>

      <div className="flex gap-10 text-white font-roboto font-[500] text-lg">
        {navLink.map((item) => (
          <div key={item.id}>
            {" "}
            <span
              key={item.id}
              className="cursor-pointer text-base tracking-wider"
            >
              {item.name}
            </span>
            {/* <div className="bg-blue-500 h-1 w-full"></div> */}
          </div>
        ))}
      </div>
      <Button
        className="text-white font-roboto "
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        Contact Us
      </Button>
      <NavDialog open={open} setOpen={setOpen} />
      <StarsCanvas />
    </div>
  );
};

export default Navbar;
