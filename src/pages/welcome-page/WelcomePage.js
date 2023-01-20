import '../../sass/main.scss';
import { CardList } from './components/cards-list/CardList';

export const WelcomePage = () => {
  return (
    <article className='welcome__wrapper'>
      <h1 className='welcome__title'>Ты сегодня покормил кота?</h1>
      <CardList />
    </article>
  );
};
