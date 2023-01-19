import { data } from '../../../../store/data.js';
import { Card } from '../card/Card';

export const CardList = () => {
  const cardComponent = data.map((card, idx) => <Card key={idx} card={card} />);

  return <div className='card-list'>{cardComponent}</div>;
};
