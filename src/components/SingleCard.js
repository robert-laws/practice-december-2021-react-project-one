const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card' />
        <img
          className='back'
          src='/img/cover.png'
          onClick={handleClick}
          alt='card cover'
        />
      </div>
    </div>
  );
};

export default SingleCard;
