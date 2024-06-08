import { getTokenDetails } from "./index";
export async function getUser() {
  const { token, cbid } = getTokenDetails();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`http://localhost:8000/users/${cbid}`, options);
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return "User details not found!";
}
export async function createOrder(cartList, total, user) {
  const { token } = getTokenDetails();
  const order = {
    cartList: cartList,
    amount: total,
    itemsQuantity: cartList?.length,
    user: user,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  };
  const response = await fetch("http://localhost:8000/orders", options);
  const data = await response.json();
  return data;
}
