import { useGetPopularActorsRepo } from "../../../Data/Repository/PopularActor.repository";

export const useGetPopularActors = () => {
  const data = useGetPopularActorsRepo();
  return data;
};
