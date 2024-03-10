import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DietBlockContainer } from './DietCardsList.styled';

import { getAllProducts } from '../../../redux/products/operations';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import {
  selectIsLoading,
  selectVisibleProducts,
} from '../../../redux/products/selectors';
import { Loader } from '../../Loader/Loader';

export const DietCardsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredCards = useSelector(selectVisibleProducts)

  // треба описати логіку закриття модалки по бекдропу і по Esc

  return (
    <>
      {/* Лоадер якогось хєра не застосовується 
      також треба обробити повідомлення про пустий список*/}
      <DietBlockContainer>
        {isLoading ? (
          <Loader />
        ) : (
          filteredCards.map((item) => (
            <ProductsItem key={item._id} value={item} />
          ))
        )}
      </DietBlockContainer>
    </>
  );
};
