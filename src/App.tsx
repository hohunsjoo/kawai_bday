import { useState } from "react";

function App() {
  const [isCardTouched, setIsCardTouched] = useState(false);

  const handleCardTouch = () => {
    setIsCardTouched(true);
    // 3초 후 다시 닫히도록 설정
    setTimeout(() => setIsCardTouched(false), 3000);
  };

  return (
    <div
      className={`card ${isCardTouched ? "touched" : ""}`}
      onClick={handleCardTouch}
      onTouchStart={handleCardTouch}
    >
      <div className="outside">
        <div className="front">
          <p>
            Happy Birthday <br />콩 소세지 찐빵이
          </p>
          <div className="cake">
            <div className="top-layer"></div>
            <div className="middle-layer"></div>
            <div className="bottom-layer"></div>
            <div className="candle"></div>
          </div>
        </div>
        <div className="back"></div>
      </div>
      <div className="inside">
        <div className="message-content">
          <p className="recipient">To 찐빵이</p>
          <div className="message">
            <p>Happy Birthday, 찐빵이! I wish I could</p>
            <p>be with you today to celebrate your</p>
            <p>birthday, but I hope you know that even</p>
            <p>if we're apart, you're always in my</p>
            <p>heart. I'm really sorry I can't properly</p>
            <p>celebrate with you this time because of</p>
            <p>the family trip, but we'll make up for it</p>
            <p>when we meet again. Since the day we</p>
            <p>started dating on September 23, you've</p>
            <p>brought so much happiness into my</p>
            <p>life. Being with you has made so many</p>
            <p>ordinary days feel special, and I'm truly</p>
            <p>grateful for every moment we share. I</p>
            <p>hope your birthday is filled with smiles,</p>
            <p>warmth, and beautiful moments. You</p>
            <p>deserve all the love and happiness in</p>
            <p>the world. Happy birthday again. I miss</p>
            <p>you and I love you.</p>
            <b>From 잘생긴 오빠</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
