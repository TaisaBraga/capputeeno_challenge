import { gql, QueryResult, useQuery } from '@apollo/client';

export const ALL_PRODUCTS = gql`
query Query($page: Int, $perPage: Int, $filter: ProductFilter) {
  allProducts(page: $page, perPage: $perPage, filter: $filter){
    id
    image_url
    name
    price_in_cents
    
  }
}
`

export interface IGetProducts {
  id: number,
  image_url: string,
  name: string,
  price_in_cents: string,
}

export interface IGetAllProducts {
  allProducts: IGetProducts[]
}

export type useGetAllProducts = {
  variables: {
    page: number,
    perPage: number,
    filter: {
      category?: string
    }
  }
}

export const useGetAllProductsList = ({
  variables
}: useGetAllProducts): QueryResult<IGetAllProducts> =>
  useQuery<IGetAllProducts>(ALL_PRODUCTS, {
    variables,
    notifyOnNetworkStatusChange: true,
  })

export default useGetAllProductsList;