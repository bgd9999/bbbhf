import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Header } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Referprogramme = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const bonusHistory = [
    { name: "**antokhan**", amount: "21.85 BDT", date: "2026-02-01 01:07:23" },
    { name: "**isajid2**", amount: "20.94 BDT", date: "2026-02-01 01:07:42" },
    { name: "**isajid2**", amount: "17.71 BDT", date: "2026-02-01 01:08:42" },
    { name: "**Siam 6**", amount: "25.56 BDT", date: "2026-02-01 01:08:54" },
    { name: "**vickyyt12**", amount: "24.83 BDT", date: "2026-02-01 01:07:02" },
    { name: "**likhonm**", amount: "177.84 BDT", date: "2026-02-01 01:08:48" },
    { name: "**8127658**", amount: "23.24 BDT", date: "2026-02-01 01:07:25" },
  ];

  return (
    <div className="min-h-screen font-poppins bg-[#0a0a0a] text-white">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} />

        <div className="flex-1 h-[calc(100vh-56px)] overflow-y-auto custom-scrollbar pb-20 relative">
          
          {/* 1. HERO BANNER */}
          <div className="w-full">
            <img 
              src="https://img.b112j.com/upload/announcement/image_239107.jpg" 
              alt="Refer a Friend Banner" 
              className="w-full object-cover max-h-[400px]"
            />
          </div>

          <div className="max-w-6xl mx-auto p-4 space-y-6 mt-4">
            
            {/* 2. PROGRAM INFO SECTION */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold">How does our Referral Program work?</h2>
                  <p className="text-gray-400 text-sm mt-1">You can earn cash rewards up to three referral tiers when you refer your friends.</p>
                  <p className="text-gray-400 text-sm">Invite your friends to join together and be entitled for lifetime cash rewards each time your friends place a bet.</p>
                </div>
                <button className="border border-gray-600 px-8 py-2 rounded text-sm hover:bg-gray-800 transition">Rules</button>
              </div>

              {/* Reward Ratios */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                   <div className="flex gap-10">
                      <span>Turnover Range <span className="text-yellow-500 ml-2">More Than 100</span></span>
                      <span>Deposit Range <span className="text-yellow-500 ml-2">More Than 0</span></span>
                      <span>Winloss Range <span className="text-yellow-500 ml-2">More Than 0</span></span>
                   </div>
                   <div className="flex gap-2">
                      <button className="bg-gray-800 p-1 rounded"><FaChevronLeft /></button>
                      <button className="bg-gray-800 p-1 rounded"><FaChevronRight /></button>
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#262626] p-3 rounded flex justify-between items-center border-l-4 border-yellow-500">
                    <span className="text-sm font-medium">Tier 1</span>
                    <span className="text-yellow-500 font-bold">0.1%</span>
                  </div>
                  <div className="bg-[#262626] p-3 rounded flex justify-between items-center">
                    <span className="text-sm font-medium">Tier 2</span>
                    <span className="text-yellow-500 font-bold">0.05%</span>
                  </div>
                  <div className="bg-[#262626] p-3 rounded flex justify-between items-center">
                    <span className="text-sm font-medium">Tier 3</span>
                    <span className="text-yellow-500 font-bold">0.01%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. STEPS SECTION */}
            <div className="bg-[#1a1a1a] rounded-lg p-8 border border-gray-800">
              <h2 className="text-xl font-bold mb-8">How to earn more rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-yellow-500 opacity-80">1</span>
                  <div className="relative">
                    <p className="font-bold text-sm">Send an invitation</p>
                    <p className="text-xs text-gray-500">to start your referral journey</p>
                    <img src="https://img.b112j.com/bj/h5/assets/v3/images/referral-program/referral-program-flowch-1.png?v=1769501762237&source=drccdnsrc" className="w-16 mt-2" alt="step1" />
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-yellow-500 opacity-80">2</span>
                  <div className="relative">
                    <p className="font-bold text-sm">Friend registration</p>
                    <p className="text-xs text-gray-500">with bets placed</p>
                    <img src="https://img.b112j.com/bj/h5/assets/v3/images/referral-program/referral-program-flowch-2.png?v=1769501762237&source=drccdnsrc" className="w-16 mt-2" alt="step2" />
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-yellow-500 opacity-80">3</span>
                  <div className="relative">
                    <p className="font-bold text-sm leading-tight">Start earning<br/>unlimited cash daily</p>
                    <p className="text-xs text-gray-500">without doing a thing.</p>
                    <img src="https://img.b112j.com/bj/h5/assets/v3/images/referral-program/referral-program-flowch-3.png?v=1769501762237&source=drccdnsrc" className="w-16 mt-2" alt="step3" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. LEADERBOARD & RECENT BONUS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Leaderboard */}
              <div className="lg:col-span-4 bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
                <h2 className="text-lg font-bold mb-6">Referral leaderboard</h2>
                <div className="flex justify-around items-end pt-10 pb-4">
                  {/* 2nd Place */}
                  <div className="text-center">
                    <div className="relative">
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-yellow-600 px-2 rounded-full">Second place</span>
                       <img src="https://img.b112j.com/bj/h5/assets/v3/images/referral-program/avatar8.png?v=1769501762237&source=drccdnsrc" className="w-16 h-16 rounded-full border-2 border-gray-500 p-1" alt="avatar" />
                    </div>
                    <p className="text-xs mt-2 text-gray-400">kamr****sans...</p>
                    <p className="text-xs text-yellow-500 font-bold">30,818.53</p>
                  </div>
                  {/* 1st Place */}
                  <div className="text-center scale-110">
                    <div className="relative">
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-green-600 px-2 rounded-full">First place</span>
                       <img src="https://img.b112j.com/bj/h5/assets/v3/images/referral-program/avatar8.png?v=1769501762237&source=drccdnsrc" className="w-20 h-20 rounded-full border-2 border-green-500 p-1" alt="avatar" />
                    </div>
                    <p className="text-xs mt-2 text-gray-400">rakib***108</p>
                    <p className="text-xs text-green-500 font-bold">36,237.11</p>
                  </div>
                  {/* 3rd Place */}
                  <div className="text-center">
                    <div className="relative">
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-orange-700 px-2 rounded-full">Third place</span>
                       <img src="https://img.b112j.com/bj/h5/assets/v3/images/referral-program/avatar8.png?v=1769501762237&source=drccdnsrc" className="w-16 h-16 rounded-full border-2 border-gray-500 p-1" alt="avatar" />
                    </div>
                    <p className="text-xs mt-2 text-gray-400">tar****74</p>
                    <p className="text-xs text-yellow-500 font-bold">8,855.79</p>
                  </div>
                </div>
              </div>

              {/* Recent Winners Table */}
              <div className="lg:col-span-8 bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Who received the bonus?</h2>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-1">
                  {bonusHistory.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-3 items-center py-2 text-xs border-b border-gray-800 last:border-0">
                      <span className="text-gray-400">{item.name}</span>
                      <span className="text-yellow-500 font-bold text-center">{item.amount}</span>
                      <span className="text-gray-500 text-right italic">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* STICKY FOOTER BUTTON */}
          <div className=" p-4 bg-[#0a0a0a]/80 backdrop-blur-md z-50 flex justify-center">
             <button className="bg-[#008d5d] hover:bg-[#00a870] text-white font-bold py-3 px-20 rounded shadow-xl transition-all uppercase text-sm">
                Refer a friend now
             </button>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Referprogramme;