import "./Carousel.css";
import React, { useReducer, useEffect, useState } from "react";

function next(length: number, active: number) {
  return (active + 1) % length;
}

function previous(length: number, active: number) {
  return (active - 1 + length) % length;
}

type CarouselState = {
  active: number;
  desired: number;
  offset: number;
};

type CarouselAction =
  | { type: "jump"; desired: number }
  | { type: "next"; length: number }
  | { type: "prev"; length: number }
  | { type: "done" }
  | { type: "drag"; offset: number };

export const Carousel: React.FC = () => {
  const images = [
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1",
  ];

  const initialState: CarouselState = {
    active: 0,
    desired: 0,
    offset: 0,
  };

  const [state, dispatch] = useReducer(carouselReducer, initialState);

  useEffect(() => {
    dispatch({ type: "done" });
  }, [state.desired]);
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
      dispatch({ type: "next", length: images.length });
    }

    if (touchEnd > touchStart) {
      dispatch({ type: "prev", length: images.length });
    }

    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div>
      <img
        src={images[state.active]}
        alt=""
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      {images.map((_, index) => (
        <div
          key={index}
          className={`dot ${state.active === index ? "active" : ""}`}
          onClick={() => dispatch({ type: "jump", desired: index })}
        ></div>
      ))}
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
        offset: NaN,
        active: state.desired,
      };
    case "drag":
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
}
