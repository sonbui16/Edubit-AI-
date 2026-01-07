
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, BookOpen, BrainCircuit } from 'lucide-react';
import { getStudyHelp } from '../services/geminiService';
import { Message } from '../types';

const StudyAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your Edubit AI assistant. How can I help you with your studies today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getStudyHelp(input, messages);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'I couldn\'t process that.' }]);
    setIsLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar"
      >
        {messages.map((m, i) => (
          <div 
            key={i} 
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none flex items-center space-x-2">
              <Loader2 size={16} className="animate-spin text-blue-600" />
              <span className="text-xs text-slate-500 font-medium">Assistant is thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested prompts */}
      {messages.length < 3 && !isLoading && (
        <div className="px-4 py-2 flex flex-wrap gap-2">
          <button 
            onClick={() => setInput("Can you explain Newton's First Law?")}
            className="text-[10px] bg-slate-50 border border-slate-200 px-2 py-1 rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Newton's Laws?
          </button>
          <button 
            onClick={() => setInput("Tips for effective studying?")}
            className="text-[10px] bg-slate-50 border border-slate-200 px-2 py-1 rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Study Tips
          </button>
          <button 
            onClick={() => setInput("How to practice English daily?")}
            className="text-[10px] bg-slate-50 border border-slate-200 px-2 py-1 rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            English Practice
          </button>
        </div>
      )}

      <div className="p-4 border-t border-slate-100">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about your courses..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-lg disabled:opacity-50 transition-opacity"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-2">
          AI can make mistakes. Always verify critical course information.
        </p>
      </div>
    </div>
  );
};

export default StudyAssistant;
