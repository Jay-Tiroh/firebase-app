// loader functions

const fetchData = async (url) => {
  const res = await fetch("http://localhost:3000/destinations");
  const data = await res.json();
  return { data };
};

export { fetchData };
