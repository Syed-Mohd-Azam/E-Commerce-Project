import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchProductDetails();
  }, []);
  const fetchProductDetails = async () => {
    const productDetails = await fetch(`http://localhost:8000/products/${id}`);
    const details = await productDetails.json();
    setProductDetails(details);
  };
  if (productDetails === null) {
    return (
      <>
        <p>Product Details is loading....</p>
      </>
    );
  }
  return (
    <>
      <section className="md:w-4/5 mx-auto p-5 flex-1">
        <h1 className="w-full text-center ">Hi my name is Azam</h1>
        <section className=" flex flex-col md:flex-row gap-10">
          <img src="" alt="Book-Image" />
        </section>
      </section>
    </>
  );
};
