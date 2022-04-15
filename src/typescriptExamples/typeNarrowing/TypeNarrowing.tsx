import Component, { Item2 } from "./components/Component";
import Component2, { Item3 } from "./components/Component2";

export default function App() {
  const items: Item2[] = [
    {
      id: 1,
      title: "A nice sunset",
      imageUrl:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      title: "A nice quotation",
      quote:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quam ea. Nisi nulla earum itaque, sapiente exercitationem, laudantium sunt fuga dolores repellendus, expedita dicta. Voluptates minima laboriosam odit reprehenderit magnam!",
    },
  ];

  const items2: Item3[] = [
    {
      id: 1,
      type: "itemImageUrl",
      title: "A nice sunset",
      imageUrl:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      type: "itemQuote",
      title: "A nice quotation",
      quote:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quam ea. Nisi nulla earum itaque, sapiente exercitationem, laudantium sunt fuga dolores repellendus, expedita dicta. Voluptates minima laboriosam odit reprehenderit magnam!",
    },
  ];

  return (
  <section>
    <Component items={items} />
    <Component2 items={items2} />
  </section>
  );
}
