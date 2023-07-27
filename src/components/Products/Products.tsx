import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProd } from '../../redux/ProductsActions';
import Card from '../Cards/Card';
import './Products.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const Products = () => {
  const productos = useSelector((state: any) => state.products);

  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
    brand: 'Allbrands',
    color: 'AllColors',
  });

  const handleFilterChange = (filters: any) => {
    setSelectedFilters(filters);
  };

  const dispatch: any = useDispatch();
  const { logout, user } = useAuth0();
  const [userNext, setUserNext] = useState({
    name: '',
    email: '',
  });
  useEffect(() => {
    if (user?.name && user?.email) {
      setUserNext({
        ...userNext,
        name: user.name,
        email: user.email,
      });
    }
    dispatch(getProd());
    response();
  }, [user]);

  const response = () => {
    return axios.post('http://localhost:3001/user', userNext);
  };

  // Filtrar los productos en función de la categoría y marca seleccionada
  const filteredProducts = productos.products.filter((prod: any) => {
    const isCategoryMatch =
      selectedFilters.category === 'All' ||
      prod.category === selectedFilters.category;
    const isBrandMatch =
      selectedFilters.brand === 'Allbrands' ||
      prod.brand === selectedFilters.brand;
    const isColorMatch =
      selectedFilters.color === 'AllColors' ||
      prod.color === selectedFilters.color;
    return isCategoryMatch && isBrandMatch && isColorMatch;
  });

  return (
    <div>
      <div className="sectionTitleFilter">
        <h5 className="titleAllProd">All Products</h5>
        <Sidebar onFilterChange={handleFilterChange} />
      </div>
      <div className="sectionCards">
        {filteredProducts.map((prod: any) => {
          return (
            <Card
              key={prod.id}
              id={prod.id}
              name={prod.name}
              image={prod.image}
              description={prod.description}
              price={prod.price}
              category={prod.category}
              color={prod.color}
              brand={prod.brand}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
