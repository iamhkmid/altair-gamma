import React from "react";

type TElementScroll = {
  top: number;
  left: number;
}

const useElementScroll = <T extends HTMLDivElement>() => {
  const [element, setElement] = React.useState<HTMLDivElement | null>(null)
  const [elementSize, setElementSize] = React.useState<TElementScroll>({
    top: element?.scrollTop || 0,
    left: element?.scrollLeft || 0,
  });

  const register = (value: T) => {
    setElement(value)
  }

  React.useEffect(() => {
    if (element) {
      const handleElementScroll = () => {
        setElementSize({
          top: element.scrollTop || 0,
          left: element.scrollLeft || 0,
        });
      };
      element.addEventListener("scroll", handleElementScroll);
      return () => {
        element.removeEventListener("scroll", handleElementScroll);
      };
    }
  }, [element]);

  return {...elementSize, register};
};

export default useElementScroll