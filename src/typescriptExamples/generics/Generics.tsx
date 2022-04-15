import DataGrid from "./genericsComponent/GenericsComponent";

export default function Generics() {
  const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 3, name: "Mike", age: 50 },
  ];

  const orders = [
    {id: 1, quantity: 5, amount: 75},
    {id: 2, quantity: 2, amount: 20},
    {id: 3, quantity: 1, amount: 40},
  ]

  return (
    <section>
      <DataGrid items={users} />
      <DataGrid items={orders} />
    </section>
  );
}
