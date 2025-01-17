import { Notification, Songsign } from "../assets";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-full">
      
      <button
        className="fixed top-20 px-2"
        onClick={toggleSidebar}
        style={{ zIndex: 1000 }}
      >
        <img
          src={isSidebarOpen ? Songsign : Notification}
          alt="Notification"
          className="w-6 h-6"
        />
      </button>

      {isSidebarOpen ? (
        <div
          className={`h-screen transition-all duration-300 fixed top-0 left-0 bg-black text-white p-3 flex flex-col justify-between overflow-auto custom-scrollbar mt-16 ${
            isSidebarOpen ? "w-1/4" : "w-0"
          }`}
        >
          <div className="bg-[#121212] rounded-sm w-full h-full">
            <div className="flex items-center justify-between py-4 px-2">
              <div className="flex items-center">
                <div className="text-lg font-bold px-4">Your Library</div>
              </div>
              <button className="text-2xl font-bold">+</button>
            </div>
            <div className="w-full h-0.5 bg-[#1f1f1f] mb-7"></div>

            <div className="mb-6 mx-5 rounded-lg p-6 bg-[#1f1f1f]">
              <div className="text-sm font-semibold mb-2">
                Create your first playlist
              </div>
              <div className="text-xs text-gray-400 mb-6">
                It's easy, we'll help you
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
                Create playlist
              </button>
            </div>

            <div className="mb-6 mx-5 rounded-lg p-6 bg-[#1f1f1f]">
              <div className="text-sm font-semibold mb-2">
                Let's find some podcasts to follow
              </div>
              <div className="text-xs text-gray-400 mb-6">
                We'll keep you updated on new episodes
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
                Browse podcasts
              </button>
            </div>
          </div>

          <div className="flex justify-center h-auto items-center flex-col gap-4 bg-[#1f1f1f]">
            <div className="flex flex-row gap-8 justify-center w-full text-xs h-auto text-gray-400">
              <div className="flex flex-col h-auto justify-center">
                <a
                  href="https://www.spotify.com/in-en/legal/"
                  className="hover:text-white"
                >
                  Legal
                </a>
                <a
                  href="https://www.spotify.com/in-en/privacy/"
                  className="hover:text-white"
                >
                  Privacy Center
                </a>
                <a
                  href="https://www.spotify.com/in-en/legal/privacy-policy/"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex flex-col h-auto justify-center">
                <a
                  href="https://www.spotify.com/in-en/legal/cookies-policy/"
                  className="hover:text-white"
                >
                  Cookies
                </a>
                <a
                  href="https://www.spotify.com/in-en/legal/privacy-policy/#s3"
                  className="hover:text-white"
                >
                  About Ads
                </a>
                <a
                  href="https://www.spotify.com/in-en/accessibility/"
                  className="hover:text-white"
                >
                  Accessibility
                </a>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm flex items-center">
                <span>
                  <a href="/">
                    <img src="" alt="earth" />
                  </a>
                </span>
                English
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
