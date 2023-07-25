"use client"
import useGetAllProductsList, { IGetAllProducts } from "@/hook/useGetAllProductsList";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

export interface IGetProductsListProps {
  GetAllProducts: IGetAllProducts | undefined;
  LoadingAllProducts: boolean;

  formatMonetaryValue: any;
}

export const GetProductsListContext = createContext<IGetProductsListProps>(
  {} as unknown as IGetProductsListProps)

export const useGetProductsListContext = () =>
  useContext<IGetProductsListProps>(GetProductsListContext)

export const GetProductsListProvider = ({ children }: React.PropsWithChildren) => {

  const { data: GetAllProducts, loading: LoadingAllProducts } =
    useGetAllProductsList({ variables: { page: 1 } });

  const formatMonetaryValue = useCallback((number: number) => {
    const valueFormatted = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return valueFormatted;
  }, [])

  const value = useMemo(
    () => ({
      GetAllProducts,
      LoadingAllProducts,
      formatMonetaryValue,
    }), [
    GetAllProducts,
    LoadingAllProducts,
    formatMonetaryValue,
  ])

  return (
    <GetProductsListContext.Provider value={value}>
      {children}
    </GetProductsListContext.Provider>
  )
}