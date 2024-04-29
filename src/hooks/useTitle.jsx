import { useEffect } from "react";

/* eslint-disable no-unused-vars */
export const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};
