export async function featuredProducts() {
  const response = await fetch("http://localhost:8000/featured_products");
  const data = await response.json();
  return data;
}

export async function productInfo(id) {
  const response = await fetch(`http://localhost:8000/products/${id}`);
  const data = await response.json();
  return data;
}
