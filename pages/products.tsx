import Link from "next/link";
import Navbar from "components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri:
      "https://api-us-east-1.graphcms.com/v2/ckinhecvrl1be01z4hkdjdb7q/master",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
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
            <a key={p.id}>
              <h3>{p.name}</h3>
              <h4>{p.price}</h4>
              <p>{p.description.text}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
