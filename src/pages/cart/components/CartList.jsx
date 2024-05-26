import { ProductCard } from "./ProductCard";
export const CartList = () => {
  const cartCardList = [
    {
      id: 10001,
      name: "Basics To Advanced In React",
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      long_description:
        "React is a JavaScript library for building user interfaces. It uses components, props, and state. You'll handle events, render conditionally, and manage forms. Advanced topics include state management with Redux and server-side rendering.",
      price: "29",
      poster:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      image_local: "/images/10001.avif",
      rating: 5,
      in_stock: true,
      size: 5,
      best_seller: true,
    },
    {
      id: 10002,
      name: "Django Framework for Beginners",
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      long_description:
        "Django is a Python web framework known for its rapid development and clean design. It includes features like an ORM, templating engine, and user authentication, making it beginner-friendly yet powerful for building web applications. ",
      price: "19",
      poster:
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      image_local: "/images/10002.avif",
      rating: 5,
      in_stock: true,
      size: 2,
      best_seller: false,
    },
  ];
  return (
    <>
      <section className="w-4/5 mx-auto  p-4 mb-8">
        <p className="text-blue-900 dark:text-gray-200 font-semibold text underline underline-2 underline-offset-2 text-center text-2xl mt-5 mb-12">
          My Cart ({cartCardList?.length})
        </p>
        <section className="mt-5">
          {cartCardList?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
        <section className="text-right">
          <button className="p-2  bg-blue-900 text-gray-200 text-lg rounded-md dark:bg-gray-200 dark:text-blue-900 font-bold hover:dark:bg-blue-900 hover:dark:text-gray-200 hover:dark:scale-125 hover:bg-yellow-400 hover:text-black italic">
            Place Order
          </button>
        </section>
      </section>
    </>
  );
};
