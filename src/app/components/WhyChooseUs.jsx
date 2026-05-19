import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quiet Study Environment",
      description:
        "Choose rooms designed for focused learning, research, and group collaboration.",
    },
    {
      title: "Flexible Hourly Booking",
      description:
        "Book rooms based on your schedule with clear hourly rates and room capacity.",
    },
    {
      title: "Well-Equipped Rooms",
      description:
        "Find rooms with Wi-Fi, projector, whiteboard, power outlets, and air conditioning.",
    },
    {
      title: "Easy Room Management",
      description:
        "Users can list rooms, manage bookings, and update their own room information easily.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8a84f]">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#0f172a] md:text-4xl">
              A Smarter Way to Find Your{" "}
              <span className="text-[#d8a84f]">Perfect Study Space</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              SmartStudy Nest helps students and library users discover quiet,
              private, and comfortable rooms for study, meetings, and group
              collaboration.
            </p>

            <div className="mt-8 rounded-2xl bg-[#f8f4ea] p-6">
              <h3 className="text-xl font-bold text-[#0f172a]">
                Built for students, readers, and focused learners.
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Whether you need a solo study corner or a group discussion room,
                this platform makes the booking experience simple and organized.
              </p>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[#eadfca] bg-[#f8f4ea] p-6 transition duration-300 hover:border-[#d8a84f] hover:bg-[#d8a84f]/10"
              >
                <div className="mb-4 h-3 w-12 rounded-full bg-[#d8a84f]" />

                <h3 className="mb-3 text-lg font-bold text-[#0f172a]">
                  {feature.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;