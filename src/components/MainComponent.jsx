import React, { useState } from 'react';
import TextArea from './TextArea';
import StatsCard from './StatsCard';
import ClearButton from './ClearButton';

function MainComponent() {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCountWithSpaces = text.length;
  const charCountWithoutSpaces = text.replace(/\s/g, '').length;

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] font-inter text-center">
          Contador de Palabras
        </h1>
        <p className="text-xl text-[#374151] font-inter text-center">
          Escribe o pega tu texto aquí
        </p>
      </div>
      <TextArea text={text} setText={setText} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatsCard
          icon="📝"
          label="Palabras"
          value={wordCount}
        />
        <StatsCard
          icon="📊"
          label="Caracteres con espacios"
          value={charCountWithSpaces}
        />
        <StatsCard
          icon="📏"
          label="Caracteres sin espacios"
          value={charCountWithoutSpaces}
        />
      </div>
      <ClearButton onClick={handleClear} />
    </div>
  );
}

export default MainComponent;