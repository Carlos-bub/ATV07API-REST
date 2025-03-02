export default function MemeGallery({ memes, onSelect }) {
    return (
      <div className="meme-gallery">
        <h2>Escolha um Template</h2>
        <div className="gallery-grid">
          {memes.map((meme) => (
            <div 
              key={meme.id} 
              className="meme-item"
              onClick={() => onSelect(meme)}
            >
              <img src={meme.url} alt={meme.name} />
              <p>{meme.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }