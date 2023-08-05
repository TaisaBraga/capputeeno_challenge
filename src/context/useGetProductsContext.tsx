"use client"
import useGetAllProductsList, { IGetAllProducts, IGetProducts } from "@/hook/useGetAllProductsList";
import useGetProductsDetails, { IGetProduct } from "@/hook/useGetProductsDetails";
import { ApolloError } from "@apollo/client";
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
  ErrorAllProducts: ApolloError | undefined;

  formatMonetaryValue: (number: number | string) => string;

  GetProductDetail: IGetProduct | undefined;
  LoadingProductDetail: boolean;
  ErrorProductDetail: ApolloError | undefined;

  isPage: number;
  setIsPage: Dispatch<SetStateAction<number>>;

  handlePreviousPage: () => void;
  handleNextPageClick: () => void;

  isNextPageDisable: boolean;
  setIsNextPageDisable: Dispatch<SetStateAction<boolean>>;

  isPrevPageDisable: boolean;
  setIsPrevPageDisable: Dispatch<SetStateAction<boolean>>;
}

export const UseGetProductsContext = createContext<IGetProductsProps>(
  {} as unknown as IGetProductsProps)

export const useGetProductsContext = () =>
  useContext<IGetProductsProps>(UseGetProductsContext)

export const GetProductsProvider = ({ children }: React.PropsWithChildren) => {
  const [isPage, setIsPage] = useState<number>(1)
  const [isNextPageDisable, setIsNextPageDisable] = useState<boolean>(false)
  const [isPrevPageDisable, setIsPrevPageDisable] = useState<boolean>(false)

  const {
    data: GetAllProducts,
    loading: LoadingAllProducts,
    error: ErrorAllProducts,
  } = useGetAllProductsList({ variables: { page: isPage, perPage: 10 } });

  const {
    data: GetProductDetail,
    loading: LoadingProductDetail,
    error: ErrorProductDetail
  } = useGetProductsDetails({ variables: { productId: "bd1f860e-fd26-4536-90c3-419d94d4ac94" } })

  const formatMonetaryValue = useCallback((number: number | string) => {
    const valueFormatted = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return valueFormatted;
  }, []);

  const handlePreviousPage = useCallback(() => {
    if (isPage === 1) {
      setIsPrevPageDisable(true)
    } else {
      setIsPage(prev => prev - 1)
    }
  }, [isPage]);

  const handleNextPageClick = useCallback(() => {
    if (isPage === 4) {
      setIsNextPageDisable(true)
    } else {
      setIsPage(() => isPage + 1)
    }
  }, [isPage]);

  useEffect(() => {
    if (isPage !== 1) {
      setIsPrevPageDisable(false)
    }

    if (isPage !== 4) {
      setIsNextPageDisable(false)
    }
  }, [isPage])

  const value = useMemo(
    () => ({
      GetAllProducts,
      LoadingAllProducts,
      ErrorAllProducts,
      formatMonetaryValue,
      GetProductDetail,
      LoadingProductDetail,
      ErrorProductDetail,
      isPage,
      setIsPage,
      handlePreviousPage,
      handleNextPageClick,
      isNextPageDisable,
      setIsNextPageDisable,
      isPrevPageDisable,
      setIsPrevPageDisable,
    }), [
    GetAllProducts,
    LoadingAllProducts,
    ErrorAllProducts,
    formatMonetaryValue,
    GetProductDetail,
    LoadingProductDetail,
    ErrorProductDetail,
    isPage,
    setIsPage,
    handlePreviousPage,
    handleNextPageClick,
    isNextPageDisable,
    setIsNextPageDisable,
    isPrevPageDisable,
    setIsPrevPageDisable,
  ])

  return (
    <UseGetProductsContext.Provider value={value}>
      {children}
    </UseGetProductsContext.Provider>
  )
}