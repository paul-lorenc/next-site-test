import { gql } from "@apollo/client";
import { Client } from "client";

const GET_PROD_BY_ID = gql`
  query getProduct($id: ID!) {
    product(where: { id: $id }) {
      name
      description {
        text
      }
      price
    }
  }
`;

export async function getStaticProps({ params }) {
  let id: string = params.pid;
  const { data } = await Client.query({
    query: GET_PROD_BY_ID,
    variables: {
      id,
    },
  });
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await Client.query({
    query: gql`
      query {
        products {
          id
        }
      }
    `,
  });
  let products: any[] = data.products;
  return {
    paths: products.map((p) => ({
      params: { pid: p.id },
    })),
    fallback: false,
  };
}

export default function Product({ data }) {
  let product: any = data.product;
  return (
    <>
      <h1>{product.name}</h1>
      <h2>{product.description.text}</h2>
      <h3>{product.price}</h3>
    </>
  );
}
