import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY 
});

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello! I am your AI Financial Assistant for FinOneSolutions. How can I help you today regarding Trade Finance or Insurance?' }
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

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({
            role: m.role === 'bot' ? 'model' : 'user',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are an AI assistant for FinOneSolutions, a financial consultancy in Faisalabad, Pakistan, owned by Wasim Nasir. 
          
          MANDATORY RULE: Output ONLY static plain text. Do NOT use markdown formatting like asterisks (** or *), bolding, or special symbols. Keep the answer clean and easy to read.
          
          Services include:
          1. Trade Factoring Solutions (RPA with World renowned factoring company with worldwide existence).
          2. General Insurance Solutions (Under Arrangement With AA+ Rated Insurance Companies).
          3. Financial Statements (Audited & Un-Audited).
          
          To apply for Export Factoring, guide users with these steps:
          - Eligibility: Exports above $2M or PKR 400M.
          - Documents: Business profile, Audited financial statements, Export contracts, Outstanding invoices.
          - Process: Application -> Due Diligence -> Approval (up to 93% funding) -> Repayment.
          
          Contact: +92 300 7207929, wasim.pasha474@gmail.com.
          Be professional, helpful, and concise. Your goal is to guide users to these services and contact details.`,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try calling our office directly.";
      setMessages(prev => [...prev, { role: 'bot', content: botText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "There was an error connecting to the assistant. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="pointer-events-auto absolute bottom-20 right-0 w-[85vw] md:w-[380px] h-[500px] max-h-[70vh] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden z-[10000] border border-slate-100"
          >
            {/* Header */}
            <div className="bg-secondary p-4 md:p-5 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">FinOne Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] md:text-xs opacity-80">AI Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }} 
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-slate-50/50 scroll-smooth">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none shadow-md shadow-primary/10' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-xs md:text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white p-2 rounded-xl hover:bg-red-600 transition-all disabled:opacity-50 shadow-md shadow-primary/20 flex items-center justify-center min-w-[40px]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary text-white shadow-2xl flex items-center justify-center relative group overflow-hidden border-4 border-white/20"
        aria-label="Toggle AI Assistant"
      >
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />}
        </div>
      </motion.button>
    </div>
  );
};

export default ChatBot;
