import { gql } from "@apollo/client";
import { Client } from "client";

const GET_PROD_BY_SLUG = gql`
  query getProduct($slug: String!) {
    product(where: { slug: $slug }) {
      name
      description {
        text
      }
      price
    }
  }
`;

export async function getStaticProps({ params }) {
  let slug: string = params.pid;
  const { data } = await Client.query({
    query: GET_PROD_BY_SLUG,
    variables: {
      slug,
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
          slug
        }
      }
    `,
  });
  let products: any[] = data.products;
  return {
    paths: products.map((p) => ({
      params: { pid: p.slug },
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
