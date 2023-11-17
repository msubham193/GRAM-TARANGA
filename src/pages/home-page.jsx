import AboutUsSection from "@/components/aboutUs/aboutus-section";
import HeroSection from "@/components/hero/hero-section";

import ChooseusSection from "../components/chooseUs/chooseus-Section";

const HomePage = () => {
  return (
    <div className="bg-black relative">
      <HeroSection />
      <ChooseusSection />
      <AboutUsSection />

      <a
        href="#about-us"
        className="fixed flex items-center justify-center z-10 cursor-pointer bottom-10 animate-bounce right-20 border-2 bg-black rounded-full h-12 w-12 "
        style={{
          backgroundImage:
            "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
          borderColor: "rgb(93, 79, 240)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height={30}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
              fill="#feffff"
            ></path>{" "}
          </g>
        </svg>
      </a>
    </div>
  );
};

export default HomePage;
