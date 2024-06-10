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
  console.log("response", response);
  if (response.ok) {
    const data = await response.json();
    console.log("data", data);
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
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

export async function getOrders() {
  const { token, cbid } = getTokenDetails();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `http://localhost:8000/orders?user.customerId=${cbid}`,
    options
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}
