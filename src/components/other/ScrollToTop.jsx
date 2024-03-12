import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ScrollToTop = () => {
  console.log("scroll to top called!");
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};
