export const ProductCard = () => {
  return (
    <a
      href="#"
      className="block min-w-[300px] rounded-lg p-4 shadow-sm shadow-blue-100"
    >
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">NPR 1,20,000</dd>
          </div>

          <div>
            <dt className="sr-only">Product Name</dt>

            <dd className="font-medium">Microsoft Surface 2 (2022)</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <svg
              className="h-4 w-4 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="text-gray-500">Kapilvastu, Nepal</p>

              <p className="font-medium">Karmahana</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
