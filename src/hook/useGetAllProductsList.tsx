import { gql, QueryResult, useQuery } from '@apollo/client';

export const ALL_PRODUCTS = gql`
query Query($page: Int, $perPage: Int, $filter: ProductFilter, $sortField: String, $sortOrder: String) {
  allProducts(page: $page, perPage: $perPage, filter: $filter, sortField: $sortField, sortOrder: $sortOrder){
    id
    image_url
    name
    price_in_cents
    created_at
    sales
  }
}
`

export interface IGetProducts {
  id: number,
  image_url: string,
  name: string,
  price_in_cents: number,
  created_at: string,
  sales: number,
}

export interface IGetAllProducts {
  allProducts: IGetProducts[]
}

export type useGetAllProducts = {
  variables: {
    page?: number,
    perPage?: number,
    sortOrder?: string,
    sortField?: string,
    filter: {
      category?: string,
      name?: string,
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