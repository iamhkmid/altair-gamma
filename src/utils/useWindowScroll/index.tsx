import React from "react";

type TWindowScroll = {
  top: number;
  left: number;
}

const useWindowScroll = () => {
  const [windowSize, setWindowSize] = React.useState<TWindowScroll>({
    top: document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || window.scrollY,
    left: document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || window.scrollX,
  });

  React.useEffect(() => {
    const handleWindowScroll = () => {
      setWindowSize({
        top: document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || window.scrollY,
        left: document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || window.scrollX,
      });
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });
  return { ...windowSize };
};

export default useWindowScroll