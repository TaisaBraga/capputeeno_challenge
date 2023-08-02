"use client"
import useGetAllProductsList, { IGetAllProducts } from "@/hook/useGetAllProductsList";
import useGetProductsDetails, { IGetProduct } from "@/hook/useGetProductsDetails";
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

export interface IGetProductsProps {
  GetAllProducts: IGetAllProducts | undefined;
  LoadingAllProducts: boolean;

  formatMonetaryValue: any;

  GetProductDetail: IGetProduct | undefined;
  LoadingProductDetail: boolean;
}

export const UseGetProductsContext = createContext<IGetProductsProps>(
  {} as unknown as IGetProductsProps)

export const useGetProductsContext = () =>
  useContext<IGetProductsProps>(UseGetProductsContext)

export const GetProductsProvider = ({ children }: React.PropsWithChildren) => {

  const {
    data: GetAllProducts,
    loading: LoadingAllProducts
  } = useGetAllProductsList({ variables: { page: 1 } });

  const {
    data: GetProductDetail,
    loading: LoadingProductDetail,
    error: ErrorProductDetail
  } = useGetProductsDetails({ variables: { productId: "bd1f860e-fd26-4536-90c3-419d94d4ac94" } })

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
      GetProductDetail,
      LoadingProductDetail,
    }), [
    GetAllProducts,
    LoadingAllProducts,
    formatMonetaryValue,
    GetProductDetail,
    LoadingProductDetail,
  ])

  return (
    <UseGetProductsContext.Provider value={value}>
      {children}
    </UseGetProductsContext.Provider>
  )
}