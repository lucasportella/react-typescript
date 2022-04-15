interface Item {
  id: number
}

interface DataGridProps<T> {
  items: T[];
}

// the T will inherit the Item interface, meaning it will necessary need an id prop to work
export default function GenericsComponent<T extends Item>({ items }: DataGridProps<T>) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}
