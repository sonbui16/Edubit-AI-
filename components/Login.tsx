
import React, { useState } from 'react';
import { Check, Mail, Signal, Wifi, Battery, ChevronLeft, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { SCHOOLS } from '../constants';

interface LoginProps {
  onLoginSuccess: (email: string, school: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('');

  const handleContinue = () => {
    if (email) setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleFinalLogin = () => {
    if (selectedSchool && password) {
      onLoginSuccess(email, selectedSchool);
    }
  };

  return (
    <div className="min-h-screen bg-[#eceff4] flex items-center justify-center font-sans p-4 lg:p-8 overflow-hidden select-none">
      <div className="relative w-[400px] h-[844px] bg-gray-800 rounded-[60px] shadow-[0_0_0_4px_#374151,0_0_0_10px_#1f2937,25px_25px_50px_rgba(0,0,0,0.4),-10px_-10px_30px_rgba(255,255,255,0.2)] p-3 border border-gray-700">
        
        {/* Physical Button Mockups */}
        <div className="absolute top-28 -left-[14px] w-[6px] h-8 bg-gray-700 rounded-l-md"></div>
        <div className="absolute top-44 -left-[14px] w-[6px] h-14 bg-gray-700 rounded-l-md"></div>
        <div className="absolute top-48 -right-[14px] w-[6px] h-20 bg-gray-700 rounded-r-md"></div>

        <div className="relative h-full w-full bg-white rounded-[48px] overflow-hidden border-[8px] border-black shadow-inner flex flex-col z-10">
          
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

          <div className="flex-1 flex flex-col w-full bg-white pt-14 pb-8 relative overflow-hidden">
            {step === 1 ? (
              <div className="flex-1 flex flex-col px-7 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex justify-center mb-3 mt-4">
                  <img 
                    src="https://edubit.vn/_ipx/_/images/index/logoedubit-full.png" 
                    alt="Edubit Logo" 
                    className="h-11 object-contain"
                  />
                </div>
                <div className="flex justify-center mb-8">
                  <span className="text-blue-600 font-medium text-xs tracking-wide bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                    Giải pháp dạy học trực tuyến
                  </span>
                </div>
                <div className="mb-6">
                  <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-2">Đăng nhập</h1>
                  <p className="text-gray-500 text-[15px]">Bắt đầu hành trình tri thức của bạn</p>
                </div>
                <div className="space-y-5">
                  <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${isFocused || email ? 'text-blue-600' : 'text-gray-400'}`}>
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 rounded-2xl text-[15px] outline-none transition-all border-gray-100 focus:border-blue-600 focus:bg-white focus:shadow-lg focus:shadow-blue-50"
                      placeholder="Nhập Email của bạn"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <button onClick={() => setRememberMe(!rememberMe)} className="flex items-center space-x-2.5 outline-none">
                      <div className={`w-5 h-5 rounded-[6px] border flex items-center justify-center transition-all ${rememberMe ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}`}>
                        {rememberMe && <Check size={14} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className="text-[13px] text-gray-600 font-medium">Lưu tài khoản</span>
                    </button>
                    <button className="text-[13px] text-blue-600 font-semibold">Quên mật khẩu?</button>
                  </div>
                  <button onClick={handleContinue} className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
                    Tiếp tục
                  </button>
                </div>
                <div className="mt-8 mb-6 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                  <span className="relative bg-white px-3 text-xs text-gray-400 font-medium uppercase tracking-wider">Hoặc đăng nhập qua</span>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="relative w-full flex items-center justify-center py-3.5 border border-gray-200 rounded-2xl bg-white active:scale-[0.99]">
                    <div className="absolute left-6">
                      <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 0.507 5.387 0 12s5.36 12 12 12c3.6 0 6.373-1.2 8.413-3.493 2.053-2.147 2.68-5.387 2.68-7.587 0-.52-.067-1.093-.16-1.573h-10.453Z"/></svg>
                    </div>
                    <span className="font-semibold text-[14px] text-gray-700">Google</span>
                  </button>
                  <button className="relative w-full flex items-center justify-center py-3.5 bg-black text-white rounded-2xl active:scale-[0.99]">
                    <div className="absolute left-6">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.06 2.7.74 3.44 1.84-3.1 1.76-2.57 5.87.54 7.05-.61 1.54-1.47 3.08-2.57 4.14zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.33-3.74 4.25z"/></svg>
                    </div>
                    <span className="font-semibold text-[14px]">Apple ID</span>
                  </button>
                </div>
                <div className="mt-auto pb-4 text-center">
                  <p className="text-gray-500 text-[14px]">
                    Bạn chưa có tài khoản?{' '}
                    <button className="text-blue-600 font-bold hover:underline">Đăng ký</button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col px-7 animate-in fade-in slide-in-from-right-4 duration-300">
                <button onClick={handleBack} className="flex items-center text-blue-600 font-semibold mb-6 -ml-1">
                  <ChevronLeft size={24} />
                  <span>Quay lại</span>
                </button>
                <div className="mb-6">
                  <h1 className="text-[26px] font-bold text-gray-900 leading-tight mb-2">Chọn trường học</h1>
                  <p className="text-gray-500 text-[15px]">Vui lòng chọn trường và nhập mật khẩu</p>
                </div>
                <div className="flex-1 overflow-y-auto hide-scrollbar space-y-4 pb-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Danh sách trường</label>
                    {SCHOOLS.map((school) => (
                      <button
                        key={school.id}
                        onClick={() => setSelectedSchool(school.name)}
                        className={`w-full flex items-center p-4 border-2 rounded-2xl transition-all duration-200 ${
                          selectedSchool === school.name 
                            ? 'border-blue-600 bg-blue-50 shadow-md' 
                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                        }`}
                      >
                        <div className={`p-2 rounded-xl mr-4 ${selectedSchool === school.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                          <GraduationCap size={20} />
                        </div>
                        <span className={`text-[15px] font-semibold text-left flex-1 ${selectedSchool === school.name ? 'text-blue-700' : 'text-gray-700'}`}>
                          {school.name}
                        </span>
                        {selectedSchool === school.name && (
                          <div className="ml-auto text-blue-600">
                            <Check size={20} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-3 mt-6">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Mật khẩu</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-4 pr-12 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl text-[15px] outline-none focus:border-blue-600 focus:bg-white transition-all"
                        placeholder="Nhập mật khẩu"
                      />
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button 
                    onClick={handleFinalLogin}
                    disabled={!selectedSchool || !password}
                    className={`w-full py-4 rounded-2xl font-bold text-[16px] shadow-lg transition-all active:scale-[0.98] ${
                      selectedSchool && password 
                        ? 'bg-blue-600 text-white shadow-blue-200' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                    }`}
                  >
                    Đăng nhập ngay
                  </button>
                </div>
              </div>
            )}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full z-10 mb-2 opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
