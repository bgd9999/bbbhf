import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Header } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FiBell, FiUser, FiLock, FiCheckCircle, FiFileText, FiTrendingUp, FiUsers } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdSportsSoccer } from "react-icons/md";
import logo from "../../assets/logo.png";

const menuItems = [
  { id: "notifications", label: "Notifications", desc: "View your latest updates", icon: <FiBell />, path: "/member/inbox/notification", color: "from-purple-900/30 to-purple-950/30", borderColor: "border-purple-700/50", iconColor: "text-purple-400" },
  { id: "personal-info", label: "Personal info", desc: "Manage your profile details", icon: <FiUser />, path: "/member/profile/info", color: "from-blue-900/30 to-blue-950/30", borderColor: "border-blue-700/50", iconColor: "text-blue-400" },
  { id: "login-security", label: "Login & Security", desc: "Update password and security settings", icon: <FiLock />, path: "/member/profile/account", color: "from-green-900/30 to-green-950/30", borderColor: "border-green-700/50", iconColor: "text-green-400" },
  { id: "verification", label: "Verification", desc: "Verify your account status", icon: <FiCheckCircle />, path: "/member/profile/verify", color: "from-yellow-900/30 to-yellow-950/30", borderColor: "border-yellow-700/50", iconColor: "text-yellow-400" },
  { id: "transactions", label: "Transaction records", desc: "Review your financial transactions", icon: <FiFileText />, path: "/member/transaction-records", color: "from-indigo-900/30 to-indigo-950/30", borderColor: "border-indigo-700/50", iconColor: "text-indigo-400" },
  { id: "betting-records", label: "Betting records", desc: "Check your betting history", icon: <MdSportsSoccer />, path: "/member/betting-records/settled", color: "from-red-900/30 to-red-950/30", borderColor: "border-red-700/50", iconColor: "text-red-400" },
  { id: "turnover", label: "Turnover", desc: "Track your turnover progress", icon: <FiTrendingUp />, path: "/member/turnover/uncomplete", color: "from-pink-900/30 to-pink-950/30", borderColor: "border-pink-700/50", iconColor: "text-pink-400" },
  { id: "referral", label: "My referral", desc: "Manage your referral program", icon: <FiUsers />, path: "/referral-program/details", color: "from-teal-900/30 to-teal-950/30", borderColor: "border-teal-700/50", iconColor: "text-teal-400" },
];

const Mprofile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_KEY_Base_URL;

  // Get user and token from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  // Fetch user data
  const checkAuthAndFetchData = async () => {
    if (!token) {
      setError("Please login to view your profile");
      setLoading(false);
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Fetch user data
      const userResponse = await axios.get(`${base_url}/api/user/my-information`);
      if (userResponse.data.success) {
        setUserData(userResponse.data.data);
      } else {
        throw new Error("Failed to fetch user data");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to fetch data";
      setError(errorMessage);
      console.error("Error:", err);
      if (err.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    checkAuthAndFetchData();
  }, [token, user.id]);

  // Handle menu item click
  const handleMenuClick = (path) => {
    navigate(path);
  };

  if (loading) {
    return (
      <div className="h-screen overflow-hidden font-poppins bg-[#0f0f0f] text-white">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex h-[calc(100vh-48px)] sm:h-[calc(100vh-56px)]">
          <Sidebar sidebarOpen={sidebarOpen} menuItems={menuItems} />
          <div className='w-full p-[20px] flex justify-center items-center'>
            <div className="relative w-24 h-24 flex justify-center items-center">
              <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-green-500 border-r-green-500 animate-spin"></div>
              <div className="w-20 h-20 rounded-full flex justify-center items-center font-bold text-lg">
                <img className='w-16' src={logo} alt="Loading..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden w-full font-poppins bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex h-[calc(100vh-48px)] sm:h-[calc(100vh-56px)] w-full">
        <Sidebar sidebarOpen={sidebarOpen} menuItems={menuItems} />
        <div className="flex-1 overflow-auto w-full transition-all duration-300">
          <div className="mx-auto w-full pb-[100px] sm:max-w-[95%] lg:max-w-screen-lg px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5">
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-[#2a2a2a] rounded-xl shadow-2xl shadow-black/50 p-4 sm:p-6 mb-4 sm:mb-6 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-transparent opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 blur-sm opacity-60"></div>
                    <img
                      src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg"
                      alt="Profile"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-500 relative z-10"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {userData?.username || "User"}
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-300">Balance:</span>
                      <div className="relative group">
                                            ৳{userData?.balance?.toFixed(2) || "0.00"}

                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Menu Items Boxes */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleMenuClick(item.path)}
                      className={`
                        bg-gradient-to-br ${item.color} 
                        ${item.borderColor} 
                        border 
                        rounded-xl 
                        p-4 sm:p-5 
                        flex flex-col items-start gap-3 
                        hover:scale-[1.02] 
                        hover:shadow-xl 
                        hover:shadow-black/30 
                        cursor-pointer 
                        transition-all duration-300 
                        hover:border-opacity-70
                        group
                        relative overflow-hidden
                      `}
                    >
                      {/* Background glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 flex items-center gap-3 w-full">
                        <div className={`
                          text-2xl sm:text-3xl 
                          ${item.iconColor} 
                          group-hover:scale-110 
                          transition-transform duration-300
                          p-2 rounded-lg bg-black/20
                        `}>
                          {item.icon}
                        </div>
                        <span className="text-[13px] sm:text-base font-semibold text-nowrap text-gray-100 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <p className="relative z-10 text-[10px] md:text-xs text-gray-400 text-nowrap group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-6 h-6 rounded-full bg-black/30 flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-gradient-to-r from-red-900/30 to-red-950/30 border border-red-700/50 rounded-xl p-4 mb-4 text-center backdrop-blur-sm">
                <div className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                </div>
              </div>
            )}

            {!token && (
              <div className="bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-4 sm:p-6 text-center max-w-sm sm:max-w-md mx-auto shadow-2xl shadow-black/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-30"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-700/30 mb-3 sm:mb-4">
                    <FiBell className="text-xl sm:text-2xl text-blue-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Authentication Required
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">Please log in to view your profile</p>
                  <a
                    href="/login"
                    className="relative inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-xs sm:text-sm font-medium group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <span className="relative">Sign In Now</span>
                  </a>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Mprofile;