import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f8f4ea] px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-3xl border border-[#eadfca] bg-white px-6 py-12 shadow-xl md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8a84f]">
            404 Error
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-[#0f172a] md:text-7xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600">
            Sorry, the page you are looking for does not exist, has been moved,
            or the link may be incorrect.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="w-full rounded-xl bg-[#0f172a] px-7 py-3 text-center font-semibold text-[#f5ecd7] shadow-md transition duration-300 hover:bg-[#d8a84f] hover:text-[#0f172a] sm:w-auto"
            >
              Back to Home
            </Link>

            <Link
              href="/rooms"
              className="w-full rounded-xl border border-[#0f172a]/20 px-7 py-3 text-center font-semibold text-[#0f172a] transition duration-300 hover:border-[#d8a84f] hover:bg-[#d8a84f]/20 sm:w-auto"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;