import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Explore Rooms",
      description:
        "Browse available study rooms with details like capacity, floor, hourly rate, and amenities.",
      number: "01",
    },
    {
      title: "View Details",
      description:
        "Check room information, facilities, and pricing before choosing the best study space.",
      number: "02",
    },
    {
      title: "Book Your Room",
      description:
        "Login to your account and book a quiet private room for focused study or group work.",
      number: "03",
    },
  ];

  return (
    <section className="bg-[#f8f4ea] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8a84f]">
            Simple Process
          </p>

          <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
            How <span className="text-[#d8a84f]">It Works</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Find, view, and book your preferred study room in just a few easy
            steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-[#eadfca] bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-lg font-bold text-[#d8a84f]">
                {step.number}
              </div>

              <h3 className="mb-3 text-xl font-bold text-[#0f172a]">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;