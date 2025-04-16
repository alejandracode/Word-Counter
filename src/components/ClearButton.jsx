import React from 'react';

function ClearButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-auto px-8 py-4 bg-[#4f46e5] text-white rounded-xl
        hover:bg-[#4338ca] transform hover:scale-105 hover:-translate-y-1
        transition-all duration-500 font-medium font-inter text-lg
        shadow-lg hover:shadow-2xl flex items-center gap-3 justify-center mx-auto
        hover:ring-4 hover:ring-[#4f46e5]/50"
    >
      <span className="text-2xl group-hover:animate-bounce">🗑️</span>
      Limpiar texto
    </button>
  );
}

export default ClearButton;