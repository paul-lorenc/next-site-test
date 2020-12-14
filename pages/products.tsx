import Link from "next/link";
import { gql } from "@apollo/client";
import { Client } from "client";

export async function getStaticProps() {
  const { data } = await Client.query({
    query: gql`
      query {
        products {
          id
          name
          slug
          description {
            text
          }
          price
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
}

export default function Products({ data }) {
  let products: any[] = data.products;
  return (
    <>
      <h1>Products</h1>
      <div>Here are our products:</div>
      <div>
        {products.map((p) => {
          return (
            <div key={p.id}>
              <h3>{p.name}</h3>
              <h4>{p.price}</h4>
              <p>{p.description.text}</p>
              <Link href={`/product/${p.id}`}>
                <a>View More</a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
