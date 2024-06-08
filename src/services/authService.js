function setTokenDetails(data) {
  console.log(data);
  sessionStorage.setItem("token", JSON.stringify(data?.accessToken));
  sessionStorage.setItem("cbid", JSON.stringify(data?.user?.id));
}
export function getTokenDetails() {
  const token = sessionStorage.getItem("token");
  const cbid = sessionStorage.getItem("cbid");
  return { token, cbid };
}
export async function login(loginDetails) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  };
  const response = await fetch("http://localhost:8000/login", options);
  console.log(response);
  if (!response.ok) {
    const data = await response.json();
    setTokenDetails(data);
    return data;
  }
  const data = await response.json();
  return data;
}

export async function register(registerDetails) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerDetails),
  };
  const response = await fetch("http://localhost:8000/register", options);
  console.log(response);
  if (!response.ok) {
    const data = await response.json();
    return data;
  }
  const data = await response.json();
  return data;
}
