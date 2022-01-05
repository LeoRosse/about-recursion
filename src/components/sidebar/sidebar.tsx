import * as React from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  window.console.log('Rendering Sidebar');

  React.useEffect(() => {
    window.console.log('Sidebar component did mount trigger');
    setShowSidebar(true);
  }, []);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-indigo  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-yellow">I am a sidebar</h3>
      </div>
    </>
  );
};

export default Sidebar;
