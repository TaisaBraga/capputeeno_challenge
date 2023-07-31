"use client"
import useGetAllProductsList, { IGetAllProducts } from "@/hook/useGetAllProductsList";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

export interface IGetProductsProps {
  GetAllProducts: IGetAllProducts | undefined;
  LoadingAllProducts: boolean;

  formatMonetaryValue: any;
}

export const useGetProductsContext = createContext<IGetProductsProps>(
  {} as unknown as IGetProductsProps)

export const GetProductsContext = () =>
  useContext<IGetProductsProps>(useGetProductsContext)

export const GetProductsProvider = ({ children }: React.PropsWithChildren) => {

  const {
    data: GetAllProducts,
    loading: LoadingAllProducts
  } = useGetAllProductsList({ variables: { page: 1 } });

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
    <useGetProductsContext.Provider value={value}>
      {children}
    </useGetProductsContext.Provider>
  )
}