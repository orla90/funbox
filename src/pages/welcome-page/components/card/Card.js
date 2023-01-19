export const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__angle-container'>
          <span className='card__angle'></span>
        </div>
        <p className={['card__title', 'card__title_default'].join(' ')}>
          {props.card.title_default}
        </p>
        <h2 className='card__name'>{props.card.name}</h2>
        <p className='card__taste'>{props.card.taste}</p>
        <p className='card__portion'>{props.card.portion}</p>
        <p className='card__portion'>{props.card.present}</p>
        {props.card.additional ? (
          <p className='card__portion'>{props.card.additional}</p>
        ) : (
          ''
        )}
        <span className='card__img'></span>
        <div className='card__circle'>
          <p className='card__weight'>{props.card.weight}</p>
          <p className='card__units'>{props.card.units}</p>
        </div>
      </div>
      <p
        className={['card__description', 'card__description_default'].join(' ')}
      >
        Чего сидишь? Порадуй котэ, <span className='card__link'>купи</span>
      </p>
    </div>
  );
};
