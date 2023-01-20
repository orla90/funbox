import React, { useState, useRef } from 'react';

export const Card = (props) => {
  const [status, setStatus] = useState(props.card.status);
  const title = useRef(null);

  const handleCardOnClick = () => {
    if (status === 'default') {
      setStatus('selected');
    } else if (status === 'selected') {
      setStatus('disabled');
    } else if (status === 'disabled') {
      setStatus('default');
    }
  };

  const handleOnMouseOut = () => {
    if (status === 'selected') {
      if (!title.current.classList.contains('card__title_selected-active')) {
        title.current.classList.add('card__title_selected-active');
      }
    }
  };

  return (
    <div className='card'>
      <div
        className={['card__content', `card__content_${status}`].join(' ')}
        onClick={handleCardOnClick}
        onMouseOut={handleOnMouseOut}
      >
        <div className='card__angle-container'>
          <span
            className={['card__angle', `card__angle_${status}`].join(' ')}
          ></span>
        </div>
        <p
          className={['card__title', `card__title_${status}`].join(' ')}
          text={props.card.title_default}
          hover-text={props.card.title_selected_hovered}
          ref={title}
        />
        <h2 className='card__name'>{props.card.name}</h2>
        <p className='card__taste'>{props.card.taste}</p>
        <p className='card__portion'>{props.card.portion}</p>
        <p className='card__portion'>{props.card.present}</p>
        {props.card.additional && (
          <p className='card__portion'>{props.card.additional}</p>
        )}
        <span className='card__img'></span>
        <div className={['card__circle', `card__circle_${status}`].join(' ')}>
          <p className='card__weight'>{props.card.weight}</p>
          <p className='card__units'>{props.card.units}</p>
        </div>
      </div>
      <p
        className={['card__description', `card__description_${status}`].join(
          ' '
        )}
      >
        {status === 'default' ? (
          <>
            Чего сидишь? Порадуй котэ,{' '}
            <span className='card__link' onClick={handleCardOnClick}>
              купи
            </span>
          </>
        ) : (
          props.card[`description_${status}`]
        )}
      </p>
    </div>
  );
};
