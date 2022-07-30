import { useQuery } from "@tanstack/react-query";
import qs from "query-string";
import { useMemo } from "react";
import type {
  RandomUserResponse,
  RandomUserVariables,
} from "../model/random-user";
import normalizer from "./normalizer";

interface Dependencies {
  variables?: RandomUserVariables;
}

const useRandomUser = (deps: Dependencies) => {
  const { variables: _variables } = deps;

  const variables: RandomUserVariables = {
    ..._variables,
    results: _variables?.results || 1,
  };

  const query = qs.stringify(variables);

  const url = `https://randomuser.me/api/?inc=email,gender,login,name,registered&noinfo&${query}`;

  const { data, isLoading, isRefetching, refetch } =
    useQuery<RandomUserResponse>(["random-user", query], () =>
      fetch(url).then((response) => response.json())
    );

  return useMemo(() => {
    return {
      data: normalizer(data),
      loading: isLoading,
      refetch,
      refetchLoading: isRefetching,
    };
  }, [data, isLoading, isRefetching, refetch]);
};

export default useRandomUser;
