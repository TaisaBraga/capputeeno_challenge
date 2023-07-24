import useGetAllProductsList from "@/hook/useGetAllProductsList";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";

export interface IGetProductsListProps {
  isProductList: boolean;
  setIsProductLsit: Dispatch<SetStateAction<boolean>>;
}

export const GetProductsListContext = createContext<IGetProductsListProps>(
  {} as unknown as IGetProductsListProps)

export const useGetProductsListContext = () =>
  useContext<IGetProductsListProps>(GetProductsListContext)

export const GetProductsListProvider = ({ children }: React.PropsWithChildren) => {

  const [isProductList, setIsProductLsit] = useState<boolean>(false)

  const { data, loading, } = useGetAllProductsList({ variables: { page: 1 } });

  const value = useMemo(() => {

  }, [
  ])

  return (
    <GetProductsListContext.Provider value={value}>
      {children}
    </GetProductsListContext.Provider>
  )
}