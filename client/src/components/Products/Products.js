import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import axios from "axios";
import productData from "../../Api";
import Product from "../Product/Product";

const cx = classNames.bind(styles);

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5500/api/product?category=${cat}`
            : "http://localhost:5500/api/product/"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [cat]);

  useEffect(() => {
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filter]);
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        {cat
          ? filteredProducts.map((item, index) => (
              <Product item={item} key={index} />
            ))
          : products
              .slice(0, 8)
              .map((item, index) => <Product item={item} key={index} />)}
      </div>
    </div>
  );
};
export default Products;
