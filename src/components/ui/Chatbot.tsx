"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
};

// Advanced Static NLP Brain
const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  // 1. Identity / About
  if (lowerInput.match(/\b(who|about|background|summary|himself|him|adarsh|profile|yourself|intro|introduction)\b/)) {
    return "Adarsh Tiwari is a passionate Full Stack Product Engineer building high-performance, scalable web applications. He specializes in React, Next.js, and Node.js. What specific area of his profile would you like to explore (e.g., Experience, Projects, or Skills)?";
  }
  
  // 2. Greetings
  if (lowerInput.match(/\b(hi|hello|hey|greetings|morning|afternoon|evening|start)\b/)) {
    return "Hi there! I am Adarsh's virtual assistant. You can ask me about his experience, projects, skills, or how to contact him!";
  }
  
  // 3. Experience & Work
  if (lowerInput.match(/\b(experience|work|job|intern|internship|hornvin|history|career|resume|cv)\b/)) {
    return "Adarsh is currently a Product Engineer (Full Stack) Intern at Hornvin. He previously worked as a Founding Engineer at Athani Softtech, and held full-stack internships at CorpTube and GridaNeo Bharat. His primary focus is building scalable SaaS platforms and APIs.";
  }
  
  // 4. Projects & Portfolio
  if (lowerInput.match(/\b(project|projects|portfolio|work|built|made|created|app|website|software)\b/)) {
    return "Adarsh has built impressive production-ready systems! Key projects include the GNB EV Service Platform (Live eCommerce/Booking), Kodemate Learning Platform, and CorpTube Network. You can view detailed architectures in the Projects section.";
  }
  
  // 5. Skills & Technologies
  if (lowerInput.match(/\b(skill|skills|tech|stack|technologies|react|nextjs|node|language|languages|framework)\b/)) {
    return "Adarsh's tech stack includes React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. He also has a very strong foundation in Data Structures & Algorithms, System Design, and Cloud deployments (AWS/Docker).";
  }
  
  // 6. Education
  if (lowerInput.match(/\b(education|college|study|degree|btech|university|grad|graduation)\b/)) {
    return "Adarsh is pursuing his B.Tech in Computer Science (2023 - 2027), where he has built a strong academic foundation in DSA, DBMS, Operating Systems, and Object-Oriented Design.";
  }
  
  // 7. Contact & Hiring
  if (lowerInput.match(/\b(contact|hire|email|reach|connect|linkedin|github|twitter|phone)\b/)) {
    return "You can reach out to Adarsh directly via email at adarshtiwaridev01@gmail.com, or connect with him on LinkedIn and GitHub. His resume is also available for download at the top of the page!";
  }
  
  // 8. Strict Scope Fallback
  return "I'm a dedicated AI assistant focused exclusively on Adarsh Tiwari's professional profile. I don't have information on that topic, but you can ask me about his experience, skills, projects, or education!";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Hi! I'm Adarsh's AI assistant. Ask me anything about his professional experience, skills, or projects!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking delay for premium feel
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: generateResponse(userMessage.content),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)] text-white shadow-xl shadow-blue-500/20 ring-4 ring-[var(--page-background)]"
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[100] flex h-[550px] max-h-[85vh] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--canvas-elevated)] shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] bg-gradient-to-r from-[var(--surface-muted)]/80 to-[var(--surface)]/50 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)] shadow-lg shadow-black/10 dark:shadow-white/10">
                  <Sparkles size={18} className="text-white absolute -top-1 -right-1" />
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-strong)] text-sm tracking-tight">Adarsh AI</h3>
                  <p className="text-[11px] font-medium text-[var(--accent-secondary)] flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-secondary)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-secondary)]"></span>
                    </span>
                    Agent Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-[var(--text-soft)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-strong)] transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full mt-auto shadow-sm ${
                        msg.role === "user"
                          ? "bg-[var(--surface-muted)] border border-[var(--border-soft)] text-[var(--text-muted)]"
                          : "bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)] text-white shadow-black/10 dark:shadow-white/10"
                      }`}
                    >
                      {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div
                      className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)] text-white rounded-3xl rounded-br-sm"
                          : "bg-[var(--surface-muted)]/80 text-[var(--text-strong)] rounded-3xl rounded-bl-sm border border-[var(--border-soft)] backdrop-blur-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-3 flex-row"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full mt-auto shadow-sm bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)] text-white shadow-black/10 dark:shadow-white/10">
                      <Bot size={14} />
                    </div>
                    <div className="bg-[var(--surface-muted)]/80 rounded-3xl rounded-bl-sm border border-[var(--border-soft)] backdrop-blur-sm px-4 py-4 shadow-sm flex items-center gap-1.5 h-[44px]">
                      <motion.div className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                      <motion.div className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSend}
              className="border-t border-[var(--border-soft)] bg-gradient-to-b from-[var(--surface-muted)]/30 to-[var(--surface)] p-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--canvas-elevated)] p-1.5 pl-4 shadow-inner focus-within:border-[var(--accent-secondary)] focus-within:ring-1 focus-within:ring-[var(--accent-secondary)] transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my experience..."
                  className="flex-1 bg-transparent text-[15px] text-[var(--text-strong)] placeholder:text-[var(--text-soft)] focus:outline-none"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-strong)] text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none"
                  aria-label="Send message"
                >
                  <Send size={16} className="ml-[2px]" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
