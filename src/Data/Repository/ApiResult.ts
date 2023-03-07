export interface APIResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
}
