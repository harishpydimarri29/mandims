import jsonata from "jsonata";
import useAsync from "./use-async";

export const useJsonata = (
  data: JSON,
  query: string
): any => {
  const { value } = useAsync(async () => await jsonata(query).evaluate(data), [data, query]);
  return value;
}