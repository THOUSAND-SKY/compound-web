import "./Carousel.css";
import React, { useReducer, useEffect, useState } from "react";
import { ShopSubCard, Product } from "../ShopSubCard/ShopSubCard";

function next(length: number, active: number) {
  return (active + 1) % length;
}

function previous(length: number, active: number) {
  return (active - 1 + length) % length;
}

type CarouselState = {
  active: number;
  desired: number;
};

type CarouselAction =
  | { type: "jump"; desired: number }
  | { type: "next"; length: number }
  | { type: "prev"; length: number }
  | { type: "done" };

export const Carousel: React.FC = () => {
  const initialState: CarouselState = {
    active: 0,
    desired: 0,
  };

  const [state, dispatch] = useReducer(carouselReducer, initialState);

  useEffect(() => {
    dispatch({ type: "done" });
  }, [state.desired]);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "next", length: Object.keys(Product).length });
    }, 3000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Handle touch events for swipe functionality
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd < touchStart) {
      dispatch({ type: "next", length: Object.keys(Product).length });
    }

    if (touchEnd > touchStart) {
      dispatch({ type: "prev", length: Object.keys(Product).length });
    }

    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div>
      {Object.values(Product).map((product, index) => (
        <div
          key={index}
          className={`carouselComponent ${
            state.active === index ? "active" : "inactive"
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ShopSubCard product={product} />
        </div>
      ))}
      <div className="indicators">
        {Object.values(Product).map((_, index) => (
          <div
            key={index}
            className={`dot ${state.active === index ? "active" : ""}`}
            onClick={() => dispatch({ type: "jump", desired: index })}
          ></div>
        ))}
      </div>
    </div>
  );
};

function carouselReducer(state: CarouselState, action: CarouselAction) {
  switch (action.type) {
    case "jump":
      return {
        ...state,
        desired: action.desired,
      };
    case "next":
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case "prev":
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case "done":
      return {
        ...state,
        active: state.desired,
      };
    default:
      return state;
  }
}
