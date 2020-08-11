import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../component';

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Острые', 'Вегетарианские', 'Гриль', 'Закрытые']} />
        <SortPopup items={['популярности', 'цена', 'алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item, index) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
