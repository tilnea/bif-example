import { useState, useEffect } from "react";
import { PopularActor } from "../../Model/IPopularActor";

import {
  useGetPopularActorImagesRepo,
  useGetPopularActorDetailsRepo,
} from "../../../Data/Repository/PopularActor.repository";

interface IGetPopularActor {
  data: PopularActor | null;
  isLoading: boolean;
  isError: boolean;
}

export const useGetPopularActor = (id: number): IGetPopularActor => {
  const details = useGetPopularActorDetailsRepo(id, id !== 0);
  const images = useGetPopularActorImagesRepo(id, id !== 0);
  const queries = [details, images];
  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);

  const [actor, setActor] = useState<PopularActor | null>(null);

  useEffect(() => {
    if (isLoading || isError) return;

    const allActorData = queries.map((query) => query.data);
    const data = Object.assign({}, ...allActorData);

    setActor(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError, id]);

  return { data: actor, isLoading, isError };
};
