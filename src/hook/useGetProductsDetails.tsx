import { gql, QueryResult, useQuery } from '@apollo/client';

export const GET_PRODUCT = gql`
query Query($productId: ID!) {
    Product(productId: $productId){
      id
      name
      description
      image_url
      category
      price_in_cents
    }
  }
`

export interface IProduct {
  id: string,
  name: string,
  description: string,
  image_url: string,
  category: string,
  price_in_cents: number,
}

export interface IGetProduct {
  Product: IGetProduct[]
}

export type useGetProduct = {
  variables: {
    productId: string
  }
}

export const useGetProductsDetails = ({
  variables
}: useGetProduct): QueryResult<IGetProduct> =>
  useQuery<IGetProduct>(GET_PRODUCT, {
    variables,
  })

export default useGetProductsDetails;