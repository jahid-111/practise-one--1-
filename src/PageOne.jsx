import React, { useEffect, useRef, useState } from "react";

const PageOne = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadRef = useRef(null);

  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      // //----- 05
      const response = await fetch(
        `https://dummyjson.com/product?limit=10&skip=${pages * 10}`
      );

      const data = await response.json();
      // console.log(data);
      console.log("Data Loaded DONE");

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts(() => [...products, ...data.products]);
        setPages((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      //----- 02
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        ////----- 03
        fetchProducts();
      }
    };
    const observer = new IntersectionObserver(onIntersection); // ----- 01

    if (observer && loadRef.current) {
      //----- 04
      observer.observe(loadRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, pages, products]);

  return (
    <div className=" h-screen text-center  ">
      <div className=" grid grid-cols-3 justify-center items-center gap-2 bg-gray-200 ">
        {products.map((product) => (
          <div className=" m-3 border-2  bg-red-100" key={product.id}>
            <img className=" h-96 w-96" src={product.images[0]} alt="" />
            <h3>{product.title}</h3>
            <h4>Price : {product.price} </h4>
          </div>
        ))}
      </div>

      {hasMore && (
        <p className=" bg-red-500 text-3xl mt-[100px]" ref={loadRef}>
          Loading... More Products
        </p>
      )}
    </div>
  );
};

export default PageOne;
