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
    console.log(data);
    return data;
  }
  const data = await response.json();
  console.log(data);
  return data;
}
