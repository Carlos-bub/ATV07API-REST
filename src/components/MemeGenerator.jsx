import { useState } from 'react';

export default function MemeGenerator({ meme, onGenerate, onBack }) {
  const [texts, setTexts] = useState(['', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(texts);
  };

  return (
    <div className="meme-generator">
      <button onClick={onBack}>Voltar</button>
      <h2>Criar: {meme.name}</h2>
      <img src={meme.url} alt={meme.name} />
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Texto Superior"
          value={texts[0]}
          onChange={(e) => setTexts([e.target.value, texts[1]])}
        />
        <input
          type="text"
          placeholder="Texto Inferior"
          value={texts[1]}
          onChange={(e) => setTexts([texts[0], e.target.value])}
        />
        <button type="submit">Gerar Meme!</button>
      </form>
    </div>
  );
}