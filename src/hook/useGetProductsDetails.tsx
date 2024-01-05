import { gql, LazyQueryResult, OperationVariables, ApolloError, useLazyQuery } from '@apollo/client';

export const GET_PRODUCT = gql`
query Query($productId: ID!) {
  Product(id: $productId){
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
  Product: IProduct
}

export type useGetProduct = (
  productId: string
) => Promise<LazyQueryResult<IGetProduct, OperationVariables>>;

type UseGetProductsDetails = {
  getProductDetail: useGetProduct;
  loading: boolean;
  error: ApolloError | undefined;
  data: IGetProduct;
}

export const useGetProductsDetails = (): UseGetProductsDetails => {
  const [getQuery, { data, loading, error }] = useLazyQuery(GET_PRODUCT, {
    notifyOnNetworkStatusChange: true
  })

  const getProductDetail = async (
    productId: string
  ) => {
    return await getQuery({
      variables: { productId }
    })
  }

  return { getProductDetail, data, loading, error }
}

export default useGetProductsDetails;