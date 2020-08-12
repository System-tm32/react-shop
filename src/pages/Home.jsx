import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../component';
import { setCategory } from '../store/actions/filters';

const categoryNames = ['Мясные', 'Острые', 'Вегетарианские', 'Гриль', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цена', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item, index) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
