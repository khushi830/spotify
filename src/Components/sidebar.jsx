const Sidebar = () => {
    
    return (
        <div className="bg-black text-white h-screen w-[400px] p-3 flex flex-col justify-between">
            
            <div className="bg-gray-900 rounded-sm w-374 h-434">
                <div className="flex items-center justify-between  py-4 px-2">
                    <button className="flex items-center">
                        <a href="/">
                            <img src="" alt="Logo" className="w-6 h-6 mr-2" />
                        </a>
                        <div className="text-lg font-bold">Your Library</div>
                    </button>
                    <button className="text-2xl font-bold">+</button>
                </div>
                <div className="w-400 h-0.5 bg-gray-800 mb-7">

                </div>

                <div className="mb-6 mx-5 rounded-lg p-6 bg-1F1F1F bg-gray-800 ">
                    <div className="text-sm font-semibold mb-2">Create your first playlist</div>
                    <div className="text-xs text-gray-400 mb-6">It's easy, we'll help you</div>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm">Create playlist</button>
                </div>
                <div className="mb-6 mx-5 rounded-lg p-6 bg-1F1F1F bg-gray-800 ">
                    <div className="text-sm font-semibold mb-2">Let's find some podcasts to follow</div>
                    <div className="text-xs text-gray-400 mb-6">We'll keep you updated on new episodes</div>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm">Browse podcasts</button>
                </div>                
            </div>

            
            <div className="flex flex-col gap-4 bg-gray-800 items-center">
                <div className="flex flex-col gap-2 text-xs text-gray-400">
                    <a href="https://www.spotify.com/in-en/legal/" className="hover:text-white">Legal</a>
                    <a href="https://www.spotify.com/in-en/privacy/" className="hover:text-white">Privacy Center</a>
                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/" className="hover:text-white">Privacy Policy</a>
                    <a href="https://www.spotify.com/in-en/legal/cookies-policy/" className="hover:text-white">Cookies</a>
                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" className="hover:text-white">About Ads</a>
                    <a href="https://www.spotify.com/in-en/accessibility/" className="hover:text-white">Accessibility</a>
                </div>

                <div className="text-center">
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm flex items-center">
                        <span><a href="/"><img src="" alt="earth" /></a></span>
                        English
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;
