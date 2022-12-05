import React from "react";
const data = [
  {
    id: 1,
    name: "codekul",
    Address: "lorem",
  },
  {
    id: 2,
    name: "codekul",
    Address: "lorem",
  },
  {
    id: 3,
    name: "codekul",
    Address: "lorem",
  },
  {
    id: 4,
    name: "codekul",
    Address: "lorem",
  },
  {
    id: 5,
    name: "codekul",
    Address: "lorem",
  },
  {
    id: 6,
    name: "codekul",
    Address: "lorem",
  },
  {
    id: 7,
    name: "codekul",
    Address: "lorem",
  },
];
function Header() {
  return (
    <div className="grid grid-cols-5 gap-3 mt-10  px-5">
      {data.map((item) => (
        <div className="border p-2 shadow rounded">
          <h1>{item.name}</h1>
          <p>{item.Address}</p>
        </div>
      ))}
    </div>
  );
}

export default Header;
