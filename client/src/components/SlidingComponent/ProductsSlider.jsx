import React, { useRef, useState } from "react";
import Classes from "./ProductSlider.module.css";
import AllProductsLayout from "./../AllProductsLayout";
import { Skeleton } from "@chakra-ui/react";
const ProductsSlider = ({ data, loading }) => {
  // console.log(data);

  let [curSlide, setCurSlide] = useState(0);
  let maxSlide = useRef(data?.length - 1).current;
  const loadingItems = useRef(new Array(5).fill({ loading: true }));
  console.log(loadingItems.current);

  // console.log(maxSlide);

  const btnRightHandler = () => {
    // console.log("hello,", curSlide, maxSlide);
    if (curSlide === maxSlide) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
      // console.log("n");
    }
  };

  const btnLeftHandler = () => {
    if (curSlide === 0) {
      setCurSlide(maxSlide);
    } else {
      setCurSlide(curSlide - 1);
    }
  };

  const BtnRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="#ffffff"
      stroke={curSlide === 4 ? "#cccccc" : "#666"}
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
  const BtnLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="#ffffff"
      stroke={curSlide === 0 ? "#cccccc" : "#666"}
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
  if (loading) {
    return (
      <div className={Classes.container121}>
        <div className={Classes["container-12"]}>
          {loadingItems.current?.map((item, i) => (
            <Skeleton
              key={i}
              startColor="blackAlpha.50"
              endColor="blackAlpha.300"
              isLoaded={!loading}
              height="100%"
              borderRadius={"md"}
            ></Skeleton>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={Classes.container121}>
      <div className={Classes["container-12"]}>
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className={Classes.slide1}
              style={{ transform: `translateX(${100 * (i - curSlide)}%)` }}
            >
              <AllProductsLayout product={item} />
            </div>
          );
        })}
      </div>
      <div>
        <button
          className={`${Classes.btnd} ${Classes["btn-right12"]}`}
          onClick={btnRightHandler}
          disabled={Number(curSlide) + 5 >= data?.length || curSlide === 4}
        >
          {BtnRight}
        </button>
        <button
          className={` ${Classes.btnd} ${Classes["btn-left12"]}`}
          onClick={btnLeftHandler}
          disabled={curSlide === 0}
        >
          {BtnLeft}
        </button>
      </div>
    </div>
  );
};

export default ProductsSlider;
