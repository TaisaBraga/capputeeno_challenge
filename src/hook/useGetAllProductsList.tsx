import { gql, QueryResult, useQuery } from '@apollo/client';

export const ALL_PRODUCTS = gql`
query allProducts($perPage: Int!) {
    allProducts(perPage: $perPage){
      id
      image_url
      name
      price_in_cents
    }
  }
`

export interface IGetAllProducts {
  id: number,
  image_url: string,
  name: string,
  price_in_cents: string,
}

export type useGetAllProducts = {
  variables: {
    page: number
  }
}

export const useGetAllProductsList = ({
  variables
}: useGetAllProducts): QueryResult<IGetAllProducts> =>
  useQuery<IGetAllProducts>(ALL_PRODUCTS, {
    variables,
  })

export default useGetAllProductsList;