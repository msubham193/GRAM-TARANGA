import React from "react";

import Card from "./card";

const ChooseUs = () => {
  const data = [
    {
      id: 1,
      title: "Expertise",
      description:
        "Our team of skilled professionals possesses a deep understanding of drone data processing, ensuring the highest level of accuracy and quality in the results.",
    },
    {
      id: 2,
      title: "Cutting-Edge Technology",
      description:
        " We utilize the latest software and hardware, enabling efficient and precise data processing",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description:
        "We tailor our services to meet your specific project requirements, offering flexibility and personalized results",
    },
  ];

  data.map((d) => {
    console.log(d.title);
  });
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10   "
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-300 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-blue-700 to-gray-700 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Build a Website That Your Customers Love
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-500">
            Our templates allow for maximum customization. No technical skills
            required – our intuitive design tools let you get the job done
            easily.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <Card title={data[0].title} description={data[0].description} />

          <Card title={data[1].title} description={data[1].description} />

          <Card title={data[2].title} description={data[2].description} />
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
