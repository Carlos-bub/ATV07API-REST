import { useState, useEffect } from 'react';
import { getMemes, generateMeme } from './services/api';
import MemeGallery from './components/MemeGallery';
import MemeGenerator from './components/MemeGenerator';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [generatedMeme, setGeneratedMeme] = useState('');

  useEffect(() => {
    const loadMemes = async () => {
      const data = await getMemes();
      setMemes(data);
    };
    loadMemes();
  }, []);

  const handleGenerate = async (texts) => {
    const url = await generateMeme(
      selectedMeme.id,
      texts,
      process.env.REACT_APP_IMGFLIP_USER, 
      process.env.REACT_APP_IMGFLIP_PASS
    );
    setGeneratedMeme(url);
  };

  return (
    <div className="App">
      <h1>Gerador de Memes</h1>
      
      {!selectedMeme ? (
        <MemeGallery memes={memes} onSelect={setSelectedMeme} />
      ) : (
        <MemeGenerator 
          meme={selectedMeme} 
          onGenerate={handleGenerate}
          onBack={() => {
            setSelectedMeme(null);
            setGeneratedMeme('');
          }}
        />
      )}
      
      {generatedMeme && (
        <div className="generated-meme">
          <img src={generatedMeme} alt="Meme Gerado" />
        </div>
      )}
    </div>
  );
}

export default App;