import React from 'react';

function TextArea({ text, setText }) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-full h-[300px] p-6 border-2 border-[#e5e7eb] rounded-xl
        text-[#1f2937] bg-white shadow-md hover:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5]
        font-inter resize-y min-h-[200px] transition-all duration-500
        hover:border-[#4f46e5]/50 textarea-glow"
      placeholder="Empieza a escribir..."
    />
  );
}

export default TextArea;