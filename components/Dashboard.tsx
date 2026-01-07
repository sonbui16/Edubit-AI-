
import React, { useState } from 'react';
import { 
  LogOut, 
  BookOpen, 
  Clock, 
  Award, 
  Star, 
  Search, 
  Menu, 
  MessageCircle, 
  X, 
  Home, 
  User, 
  PlayCircle,
  ChevronRight,
  Settings,
  Bell,
  ShieldCheck,
  Calendar,
  TrendingUp,
  Signal,
  Wifi,
  Battery
} from 'lucide-react';
import { MOCK_COURSES } from '../constants';
import StudyAssistant from './StudyAssistant';

interface DashboardProps {
  user: { email: string; school: string } | null;
  onLogout: () => void;
}

type TabType = 'home' | 'learn' | 'account';

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Home View Component
  const HomeView = () => (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-900 mb-1">Chào mừng bạn! 👋</h1>
        <p className="text-slate-500 text-xs">Cùng chinh phục mục tiêu học tập nhé.</p>
      </div>

      {/* Main Progress Goal Card */}
      <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tuần này</p>
              <p className="text-xs font-bold text-slate-900">Mục tiêu: 10 giờ</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-black text-blue-600">65%</span>
          </div>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-[10px] text-slate-400 font-medium">Còn <span className="text-slate-900 font-bold">3.5 giờ</span> nữa.</p>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-[24px] text-white shadow-lg shadow-blue-100 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-100 text-[10px] font-medium mb-1">Tổng thời gian tích lũy</p>
            <p className="text-2xl font-bold mb-3">24h 15m</p>
            <div className="flex items-center space-x-2 text-[10px] bg-white/20 w-fit px-2.5 py-1 rounded-full backdrop-blur-md">
              <Award size={12} />
              <span>Hạng 5 trong lớp</span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <BookOpen size={100} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-8 h-8 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-2">
            <Clock size={16} />
          </div>
          <p className="text-[10px] text-slate-500 font-medium">Đang học</p>
          <p className="text-md font-bold text-slate-900">{MOCK_COURSES.length} Khóa</p>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-2">
            <Award size={16} />
          </div>
          <p className="text-[10px] text-slate-500 font-medium">Chứng chỉ</p>
          <p className="text-md font-bold text-slate-900">8 Cái</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-slate-900 text-sm">Tiếp tục bài học</h2>
        <button onClick={() => setActiveTab('learn')} className="text-blue-600 text-xs font-semibold hover:underline">Xem thêm</button>
      </div>

      <div className="space-y-3">
        {MOCK_COURSES.slice(0, 3).map((course) => (
          <div key={course.id} className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow">
            <div className="relative flex-shrink-0">
              <img src={course.image} className="w-12 h-12 rounded-lg object-cover" alt={course.title} />
              <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center rounded-lg">
                 <PlayCircle size={14} className="text-white drop-shadow-md" fill="currentColor" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 text-[11px] truncate mb-1">{course.title}</h3>
              <div className="flex items-center justify-between text-[8px] font-bold mb-1">
                <span className="text-slate-400">Tiến độ</span>
                <span className="text-blue-600">{course.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Learn View Component (Vertical List, Image on Left)
  const LearnView = () => (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-900">Khóa học của tôi</h1>
        <p className="text-slate-500 text-xs">Tiếp tục hành trình chinh phục kiến thức</p>
      </div>

      <div className="flex flex-col gap-3 pb-6">
        {MOCK_COURSES.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group flex h-28">
            <div className="w-24 h-full relative flex-shrink-0">
              <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={course.title} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg cursor-pointer">
                  <PlayCircle size={18} fill="currentColor" />
                </div>
              </div>
              <span className="absolute bottom-1 left-1 bg-blue-600/90 backdrop-blur-md text-white text-[6px] font-bold px-1 py-0.5 rounded uppercase tracking-tighter">{course.category}</span>
            </div>

            <div className="flex-1 p-2 flex flex-col justify-between min-w-0">
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 text-[11px] line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-[9px] text-slate-400 mt-0.5 truncate">{course.instructor}</p>
              </div>

              <div className="space-y-1 mt-auto">
                <div className="flex items-center justify-between text-[8px] font-bold">
                  <span className="text-slate-400">Tiến độ</span>
                  <span className="text-blue-600">{course.progress}%</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Calendar size={9} />
                    <span className="text-[8px] font-medium truncate">Hạn: {course.endDate}</span>
                  </div>
                  <button className="text-[8px] font-bold text-blue-600 flex items-center space-x-0.5 group/btn">
                    <span>Học tiếp</span>
                    <ChevronRight size={9} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Account View Component
  const AccountView = () => (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-blue-100 mb-3 border-4 border-white">
          {user?.email[0].toUpperCase()}
        </div>
        <h2 className="text-lg font-bold text-slate-900">{user?.email}</h2>
        <p className="text-slate-500 text-xs font-medium">{user?.school}</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-6">
        <div className="p-3 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500"><User size={16} /></div>
            <span className="text-xs font-semibold">Thông tin cá nhân</span>
          </div>
          <ChevronRight size={16} className="text-slate-300" />
        </div>
        <div className="p-3 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500"><Bell size={16} /></div>
            <span className="text-xs font-semibold">Thông báo</span>
          </div>
          <ChevronRight size={16} className="text-slate-300" />
        </div>
        <div className="p-3 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500"><ShieldCheck size={16} /></div>
            <span className="text-xs font-semibold">Bảo mật</span>
          </div>
          <ChevronRight size={16} className="text-slate-300" />
        </div>
        <div className="p-3 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500"><Settings size={16} /></div>
            <span className="text-xs font-semibold">Cài đặt</span>
          </div>
          <ChevronRight size={16} className="text-slate-300" />
        </div>
      </div>

      <button 
        onClick={onLogout}
        className="w-full bg-red-50 text-red-600 font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 active:scale-95 transition-transform text-sm"
      >
        <LogOut size={18} />
        <span>Đăng xuất</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#eceff4] flex items-center justify-center font-sans p-4 lg:p-8 overflow-hidden select-none">
      
      {/* iPhone Frame */}
      <div className="relative w-[400px] h-[844px] bg-gray-800 rounded-[60px] shadow-[0_0_0_4px_#374151,0_0_0_10px_#1f2937,25px_25px_50px_rgba(0,0,0,0.4),-10px_-10px_30px_rgba(255,255,255,0.2)] p-3 border border-gray-700">
        
        {/* Physical Buttons */}
        <div className="absolute top-28 -left-[14px] w-[6px] h-8 bg-gray-700 rounded-l-md"></div>
        <div className="absolute top-44 -left-[14px] w-[6px] h-14 bg-gray-700 rounded-l-md"></div>
        <div className="absolute top-48 -right-[14px] w-[6px] h-20 bg-gray-700 rounded-r-md"></div>

        {/* Screen Area */}
        <div className="relative h-full w-full bg-[#F8FAFC] rounded-[48px] overflow-hidden border-[8px] border-black shadow-inner flex flex-col z-10">
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-14 z-50 flex justify-between items-start pt-3 px-8 text-black pointer-events-none">
             <div className="text-[14px] font-semibold tracking-wide w-12 text-center ml-1">9:41</div>
             <div className="flex items-center space-x-1.5 mt-0.5 mr-1">
               <Signal size={16} fill="currentColor" />
               <Wifi size={16} />
               <div className="relative">
                 <Battery size={22} />
                 <div className="absolute top-1/2 right-[2px] transform -translate-y-1/2 w-[16px] h-[7px] bg-black rounded-[1px]"></div>
               </div>
             </div>
          </div>

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
             <div className="w-[120px] h-[35px] bg-black rounded-full"></div>
          </div>

          {/* App Header */}
          <header className="px-6 pt-12 pb-3 flex items-center justify-between bg-[#F8FAFC]/80 backdrop-blur-md z-30">
            <img 
              src="https://edubit.vn/_ipx/_/images/index/logoedubit-full.png" 
              alt="Edubit" 
              className="h-6 object-contain"
            />
            <div className="flex items-center space-x-1.5">
              <button className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#F8FAFC]"></span>
              </button>
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                {user?.email[0].toUpperCase()}
              </div>
            </div>
          </header>

          {/* Main Content Area - Increased padding-bottom to account for taller nav */}
          <main className="flex-1 px-6 pb-32 pt-2 overflow-y-auto hide-scrollbar">
            {activeTab === 'home' && <HomeView />}
            {activeTab === 'learn' && <LearnView />}
            {activeTab === 'account' && <AccountView />}
          </main>

          {/* Floating Assistant Trigger - Moved up to avoid nav overlap */}
          <button 
            onClick={() => setIsAssistantOpen(true)}
            className="absolute bottom-28 right-6 w-12 h-12 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-40"
          >
            <div className="relative">
              <MessageCircle size={24} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-blue-600"></span>
            </div>
          </button>

          {/* Bottom Navigation - Increased pb-9 to create space from Home Indicator */}
          <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 px-8 pt-3 pb-9 flex justify-between items-center z-50 rounded-t-[32px] shadow-[0_-8px_25px_rgba(0,0,0,0.05)]">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center space-y-1 transition-all ${activeTab === 'home' ? 'text-blue-600' : 'text-slate-400'}`}
            >
              <div className={`p-1 rounded-lg ${activeTab === 'home' ? 'bg-blue-50' : ''}`}>
                <Home size={18} fill={activeTab === 'home' ? 'currentColor' : 'none'} />
              </div>
              <span className="text-[9px] font-bold">Trang chủ</span>
            </button>

            <button 
              onClick={() => setActiveTab('learn')}
              className={`flex flex-col items-center space-y-1 transition-all ${activeTab === 'learn' ? 'text-blue-600' : 'text-slate-400'}`}
            >
              <div className={`p-1 rounded-lg ${activeTab === 'learn' ? 'bg-blue-50' : ''}`}>
                <BookOpen size={18} fill={activeTab === 'learn' ? 'currentColor' : 'none'} />
              </div>
              <span className="text-[9px] font-bold">Vào học</span>
            </button>

            <button 
              onClick={() => setActiveTab('account')}
              className={`flex flex-col items-center space-y-1 transition-all ${activeTab === 'account' ? 'text-blue-600' : 'text-slate-400'}`}
            >
              <div className={`p-1 rounded-lg ${activeTab === 'account' ? 'bg-blue-50' : ''}`}>
                <User size={18} fill={activeTab === 'account' ? 'currentColor' : 'none'} />
              </div>
              <span className="text-[9px] font-bold">Cá nhân</span>
            </button>
          </nav>

          {/* AI Assistant Drawer */}
          {isAssistantOpen && (
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex flex-col justify-end">
              <div className="w-full h-[85%] bg-white rounded-t-[32px] shadow-2xl animate-in slide-in-from-bottom duration-300 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <Star size={18} className="fill-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Trợ lý Edubit</h3>
                      <p className="text-[9px] text-slate-500">Gemini 3 Pro</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAssistantOpen(false)} className="p-2 bg-slate-50 text-slate-400 rounded-xl">
                    <X size={16} />
                  </button>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col bg-slate-50">
                  <StudyAssistant />
                </div>
              </div>
            </div>
          )}
          
          {/* iOS Home Indicator - Centered within the padding-bottom space of the nav */}
          <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-32 h-[5px] bg-gray-900 rounded-full z-[60] opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
