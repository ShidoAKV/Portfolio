import { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import pulseAi from "./pulseAi.json";
import { motion, AnimatePresence } from "framer-motion";

const Assistance = () => {
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]); // stores all messages
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const backendUrl='http://localhost:3001'
  const handleRequest = async () => {
     
    if (!prompt.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { sender: 'user', text: prompt }]);
    setLoading(true);

    try {
 
       
      const { data } = await axios.post(`${backendUrl}/api/assistance/send`, { prompt });

      if (data.success) {
        // Add AI response to chat
        setChatHistory(prev => [...prev, { sender: 'ai', text: data.message }]);
      } else {
        setChatHistory(prev => [...prev, { sender: 'ai', text: 'No response received.' }]);
      }
    } catch (error) {
      setChatHistory(prev => [...prev, { sender: 'ai', text: 'Something went wrong.' }]);
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  return (
    <>
     
      <div
        className="fixed z-50 text-white w-16 h-16 flex items-center justify-center 
                   right-8 bottom-8 cursor-pointer shadow-lg hover:scale-110 transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        <Lottie
          animationData={pulseAi}
          loop={true}
          style={{ width: 64, height: 64 }}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 bottom-28 right-8 w-70 md:w-80 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl shadow-2xl
                       flex flex-col p-4 border border-gray-700 h-[400px]"
          >
            <h2 className="font-semibold mb-2 text-center border-b border-gray-700 pb-2 text-white">
              AI Assistance
            </h2>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto mb-3 p-2 bg-gray-800 rounded-lg text-sm text-white">
              {chatHistory.length === 0 && !loading && (
                <p className="text-gray-500">Ask me anything...</p>
              )}
              {chatHistory.map((msg, index) => (
                <p
                  key={index}
                  className={msg.sender === 'user' ? 'text-indigo-300 mb-1' : 'text-gray-200 mb-1'}
                >
                  {msg.sender === 'user' ? `You: ${msg.text}` : `AI: ${msg.text}`}
                </p>
              ))}
              {loading && <p className="italic text-gray-400">Thinking...</p>}
            </div>

            {/* Input area */}
            <div className="flex gap-2 mt-auto">
              <input
                type="text"
                placeholder="Type your question..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 p-2 border rounded-lg text-sm outline-none 
                           focus:ring-2 focus:ring-indigo-400 bg-gray-700 text-white border-gray-600"
                onKeyDown={(e) => e.key === 'Enter' && handleRequest()} // send on Enter
              />
              <button
                onClick={handleRequest}
                disabled={loading}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Assistance;
