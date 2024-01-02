"use client"
import useGetAllProductsList, { IGetAllProducts } from "@/hook/useGetAllProductsList";
import useGetProductsDetails, { IGetProduct } from "@/hook/useGetProductsDetails";
import { FilterByProducts, FilterPriorityTypes } from "@/types/FilterTypes";
import { ApolloError } from "@apollo/client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useDeferredValue,
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

  isPage: number | undefined;
  setIsPage: Dispatch<SetStateAction<number | undefined>>;

  handlePreviousPage: () => void;
  handleNextPageClick: () => void;

  isNextPageDisable: boolean;
  setIsNextPageDisable: Dispatch<SetStateAction<boolean>>;

  isPrevPageDisable: boolean;
  setIsPrevPageDisable: Dispatch<SetStateAction<boolean>>;

  isProductType: string | undefined;
  setIsProductType: Dispatch<SetStateAction<string | undefined>>;

  handleProductType: (value: string | undefined) => void;

  handleGetProductsByFilter: (item: string) => void;
  isListVisible: boolean;
  setListVisible: Dispatch<SetStateAction<boolean>>;
  isFilter: string | undefined;
  setIsFilter: Dispatch<SetStateAction<string | undefined>>;

  isSortOrder: string | undefined;
  setIsSortOrder: Dispatch<SetStateAction<string | undefined>>;

  isReversedList: boolean;
  setIsReversedList: Dispatch<SetStateAction<boolean>>;

  isProductId: string;
  setIsProductId: Dispatch<SetStateAction<string>>;

}

export const UseGetProductsContext = createContext<IGetProductsProps>(
  {} as unknown as IGetProductsProps)

export const useGetProductsContext = () =>
  useContext<IGetProductsProps>(UseGetProductsContext)

export const GetProductsProvider = ({ children }: React.PropsWithChildren) => {
  const [isPage, setIsPage] = useState<number | undefined>(1)
  const [isNextPageDisable, setIsNextPageDisable] = useState<boolean>(false)
  const [isPrevPageDisable, setIsPrevPageDisable] = useState<boolean>(false)
  const [isProductType, setIsProductType] = useState<string | undefined>(undefined)
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  const [isListVisible, setListVisible] = useState<boolean>(false)
  const [isFilter, setIsFilter] = useState<string | undefined>(undefined)
  const [isSortOrder, setIsSortOrder] = useState<string | undefined>(undefined)
  const [isReversedList, setIsReversedList] = useState<boolean>(false);
  const [isProductId, setIsProductId] = useState<string>('')

  const {
    data: GetAllProducts,
    loading: LoadingAllProducts,
    error: ErrorAllProducts,
  } = useGetAllProductsList({
    variables: {
      page: isPage,
      perPage: 10,
      filter: { category: isProductType },
      sortOrder: isSortOrder,
      sortField: isFilter
    }
  });

  const {
    data: GetProductDetail,
    loading: LoadingProductDetail,
    error: ErrorProductDetail
  } = useGetProductsDetails({ variables: { productId: isProductId } })

  const formatMonetaryValue = useCallback((number: number | string) => {
    const valueFormatted = number?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return valueFormatted;
  }, []);

  const handlePreviousPage = useCallback(() => {
    if (isPage === 1) {
      setIsPrevPageDisable(true)
    } else {
      setIsPage(prev => prev ? prev - 1 : undefined)
    }
  }, [isPage]);

  const handleNextPageClick = useCallback(() => {
    const hasProductsList = GetAllProducts &&
      GetAllProducts.allProducts &&
      GetAllProducts.allProducts.length;

    if (hasProductsList === 0 || isPage === 4) {
      setIsNextPageDisable(true)
    } else {
      setIsPage(() => isPage ? isPage + 1 : undefined)

    }
  }, [isPage, GetAllProducts]);

  useEffect(() => {
    if (isPage !== 1) {
      setIsPrevPageDisable(false)
    }

    if (isPage !== 4) {
      setIsNextPageDisable(false)
    }
  }, [isPage])

  const handleProductType = useCallback((value: string | undefined) => {
    if (value === FilterByProducts.TSHIRTS ||
      value === FilterByProducts.MUGS ||
      value === undefined) {
      setIsProductType(value)
    }
  }, [])

  const handleGetProductsByFilter = useCallback(async (item: string) => {
    const originalProducts = GetAllProducts?.allProducts;

    if (originalProducts) {
      if (item === FilterPriorityTypes.POPULARITY) {
        setIsPage(undefined)
        setIsFilter(item)
        setIsSortOrder(item)

      } else if (item === FilterPriorityTypes.NEWS) {
        setIsPage(undefined)
        setIsFilter(item)
        setIsSortOrder(item)
      } else if (item === FilterPriorityTypes.PRICE) {
        setIsPage(undefined)
        setIsFilter(item)
        setIsSortOrder(item)
      } else if (item === FilterPriorityTypes.PRICE_DESC) {
        setIsPage(undefined)
        setIsFilter(item)
        setIsSortOrder(item)
        setIsReversedList(true);
      }
      setListVisible(false);
    }

  }, [GetAllProducts]);

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
      isProductType,
      setIsProductType,
      handleProductType,
      handleGetProductsByFilter,
      isOrderOpen,
      setIsOrderOpen,
      isListVisible,
      setListVisible,
      isFilter,
      setIsFilter,
      isSortOrder,
      setIsSortOrder,
      isReversedList,
      setIsReversedList,
      isProductId,
      setIsProductId
    }),
    [
      GetAllProducts,
      LoadingAllProducts,
      ErrorAllProducts,
      formatMonetaryValue,
      GetProductDetail,
      LoadingProductDetail,
      ErrorProductDetail,
      isPage,
      handlePreviousPage,
      handleNextPageClick,
      isNextPageDisable,
      isPrevPageDisable,
      isProductType,
      handleProductType,
      handleGetProductsByFilter,
      isOrderOpen,
      isListVisible,
      isFilter,
      isSortOrder,
      isReversedList,
      isProductId])

  return (
    <UseGetProductsContext.Provider value={value}>
      {children}
    </UseGetProductsContext.Provider>
  )
}