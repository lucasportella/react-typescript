export interface Item {
  id: number;
  title?: string;
  imageUrl?: string;
  quote?: string;
  // lets say we can have only imageUrl or quote in the props, this means this interface above is no longer a valid solution, because it allows both at the same time. The solution is to split them the interface and then use Union Types.
}

export interface ItemImageUrl {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ItemQuote {
  id: number;
  title: string;
  quote: string;
}

export type Item2 = ItemImageUrl | ItemQuote

interface ComponentProps {
  items: Item2[];
}

// the problem comes in the render phase, because typescript doesn't have a guarantee that item.imageUrl or item.quote will render, always one will miss. We will have to fix that as well

// export default function Component({ items }: ComponentProps) {
//   return (
//     <ul>
//       {items.map((item) => {
//         return (
//           <li key={item.id}>
//             {item.title && <p>{item.title}</p>}
//             {item.imageUrl && (
//               <img
//                 style={{ maxWidth: "15rem" }}
//                 src={item.imageUrl}
//                 alt={item.title}
//               />
//             )}

//             {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// the solution is to use a if with the in operator(IN OPERATOR NARROWING):
// (the in operator in javascript checks the property of an object as a string, more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

export default function Component({ items }: ComponentProps) {

  return (
    <ul>
      {items.map((item) => {
        
        if ("imageUrl" in item) {
        return (
          <li key={item.id}>
            {item.title && <p>{item.title}</p>}
            {item.imageUrl && (
              <img
                style={{ maxWidth: "15rem" }}
                src={item.imageUrl}
                alt={item.title}
              />
            )}

          </li>
      )}
      // typescript is smart enough to know if the it's not imageUrl, then it can only be quote case, which allow us to use a clean return instead of another if ("quote" in item):
      return (
        <li key={item.id}>
          {item.title && <p>{item.title}</p>}
          {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}
        </li>

      )
      
      })}
    </ul>

    )}

