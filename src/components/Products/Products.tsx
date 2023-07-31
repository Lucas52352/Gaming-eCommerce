<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProd } from "../../redux/ProductsActions";
import Card from "../Cards/Card";
import "./Products.css";
import { User, useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { Dispatch } from "@reduxjs/toolkit";

=======
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProd } from '../../redux/ProductsActions';
import Card from '../Cards/Card';
import './Products.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import LoaderPagination from '../Loader/LoaderPagination/LoaderPagiantion';
>>>>>>> developer

interface UserNext{
  name: string,
  email:string,
  picture:string | undefined,
}
<<<<<<< HEAD

const Products = () => {
  const productos = useSelector((state:any) => state.products);
  const dispatch: Dispatch<any> = useDispatch();
  const { logout, user } = useAuth0();
=======


const Products = () => {
  const productos = useSelector((state: any) => state.products);
>>>>>>> developer

  const [selectedFilters, setSelectedFilters] = useState({
    category: "All",
    brand: "Allbrands",
    color: "AllColors",
  });

  const handleFilterChange = (filters: any) => {
    setSelectedFilters(filters);
  };

<<<<<<< HEAD
=======
  const dispatch: any = useDispatch();
  const { logout, user } = useAuth0();
>>>>>>> developer
  const [userNext, setUserNext] = useState<UserNext>({
    name: "",
    email: "",
    picture:""
  });

  const response = () => {
    return axios.post("http://localhost:3001/user/", {
      name: userNext.name,
      email: userNext.email,
      picture: userNext.picture
    });
  };

  useEffect(() => {
    dispatch(getProd());
  }, [dispatch]);

  useEffect(() => {
    if (user?.name && user?.email) {
      setUserNext({
        name: user.name,
        email: user.email,
        picture: user.picture
      });
    }
  }, [user]);

  useEffect(() => {
    if (userNext.name && userNext.email) {
      response();
    }
  }, [userNext]);
  console.log(userNext);
<<<<<<< HEAD
  
  // Filtrar los productos en función de la categoría, marca y color seleccionados
  const filteredProducts = productos.products.filter((prod:any) => {
    const isCategoryMatch =
      selectedFilters.category === "All" || prod.category === selectedFilters.category;
    const isBrandMatch =
      selectedFilters.brand === "Allbrands" || prod.brand === selectedFilters.brand;
    const isColorMatch =
      selectedFilters.color === "AllColors" || prod.color === selectedFilters.color;
    return isCategoryMatch && isBrandMatch && isColorMatch;
  });

=======
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



    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 7;

  // Calcular la cantidad total de páginas necesarias
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Función para manejar el cambio de página
    /* const handlePageChange = (page:any) => {
    setCurrentPage(page);
   }; */

  // Obtener los productos correspondientes a la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const [isLoading, setIsLoading] = useState(false);

  // ...

  // 3. Función para manejar el cambio de página
  const handlePageChange = (page:any) => {
    // 2. Mostrar el LoaderPagination
    setIsLoading(true);

    // Actualizar la página actual
    setCurrentPage(page);

    // Establecer un temporizador de 3 segundos para ocultar el LoaderPagination
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  


>>>>>>> developer
  return (
    <div>
      <div className="sectionTitleFilter">
        <h5 className="titleAllProd">All Products</h5>
        <Sidebar onFilterChange={handleFilterChange} />
      </div>
<<<<<<< HEAD
      <div className="sectionCards">
        {filteredProducts.map((prod:any) => (
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
        ))}
      </div>
    </div>
  );
};

export default Products;
=======

    <div className='sectionCards'>
      
       {
        currentProducts.map((prod:any) => {
          return(
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
              stock={prod.stock}
            />
          );
        })}
      </div>
      {isLoading && <LoaderPagination />}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
          <button
          key={pageNum}
          className={`pagination-button ${pageNum === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
          </div>
  )
}


export default Products;
>>>>>>> developer
