import * as React from 'react';
import { Link } from 'src/components/link';

const Home = () => {
  window.console.log('Rendering: Home');
  return (
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Recursion</span>{' '}
              <span className="block text-indigo-600 xl:inline">study</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A study using a recursive payload and printing it in pages through a single component, also recursive.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/brand-overview"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1499510502518-8f294dac3f9f?ixlib=rb-1.2.1&q=10&fm=jpg&crop=entropy&cs=srgb"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
