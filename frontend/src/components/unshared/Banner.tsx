export const Banner = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1633113215844-b2ddc0411724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:via-white/40 sm:to-transparent"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[80vh] lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-medium sm:text-5xl">
            Microsoft Surface 2 (2022)
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl font-extrabold sm:leading-relaxed">
            NPR 1,20,000
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
