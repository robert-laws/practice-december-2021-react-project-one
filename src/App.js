import './sass/App.scss';
import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: '/img/circle.png', matched: false },
  { src: '/img/cross.png', matched: false },
  { src: '/img/triangle.png', matched: false },
  { src: '/img/target.png', matched: false },
  { src: '/img/diamond.png', matched: false },
  { src: '/img/cube.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((prevCard) =>
            prevCard.src === choiceOne.src
              ? { ...prevCard, matched: true }
              : prevCard
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <h1>Matching Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <section className='grid'>
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </section>
      <h3>Turns: {turns}</h3>
    </div>
  );
}

export default App;
