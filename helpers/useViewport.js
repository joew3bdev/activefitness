import React from "react";

const useViewport = () => {
  const [width, setWidth] = React.useState(0);
  const handleWindowResize = () => setWidth(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

export default useViewport;
