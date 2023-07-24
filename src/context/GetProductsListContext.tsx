"use client"
import useGetAllProductsList, { IGetAllProducts } from "@/hook/useGetAllProductsList";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

export interface IGetProductsListProps {
  GetAllProducts: IGetAllProducts | undefined;
  LoadingAllProducts: boolean;
}

export const GetProductsListContext = createContext<IGetProductsListProps>(
  {} as unknown as IGetProductsListProps)

export const useGetProductsListContext = () =>
  useContext<IGetProductsListProps>(GetProductsListContext)

export const GetProductsListProvider = ({ children }: React.PropsWithChildren) => {

  const { data: GetAllProducts, loading: LoadingAllProducts } = useGetAllProductsList({ variables: { page: 1 } });


  const value = useMemo(
    () => ({
      GetAllProducts,
      LoadingAllProducts
    }), [
    GetAllProducts,
    LoadingAllProducts
  ])

  return (
    <GetProductsListContext.Provider value={value}>
      {children}
    </GetProductsListContext.Provider>
  )
}