export const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users = await res.json();

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};
