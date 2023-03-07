import { IPopularActorListing } from "../../Domain/Model/IPopularActorListing";
import { IActorDetail } from "../../Domain/Model/IActorDetail";
import { IActorImages } from "../../Domain/Model/IActorImages";
import {
  useGetPopularPeople,
  useGetPersonImages,
  useGetPersonDetails,
} from "../API/PersonAPI";
import { APIResult } from "./ApiResult";
import {
  MapPopularActor,
  MapActorImagePath,
  MapActorDetails,
} from "../Mapper/PopularActor/PopularActor.mapper";

export const useGetPopularActorsRepo = (): APIResult<
  IPopularActorListing[]
> => {
  const { data: dto, isLoading, isError } = useGetPopularPeople();

  const data = dto?.results?.map((person) => MapPopularActor(person));

  return { data, isLoading, isError };
};

export const useGetPopularActorImagesRepo = (
  id: number,
  enabled: boolean
): APIResult<IActorImages> => {
  const { data: dto, isLoading, isError } = useGetPersonImages(id, enabled);

  const images = dto?.profiles?.map((profile) => MapActorImagePath(profile));

  const data = { id: id, images: images };

  return { data, isLoading, isError };
};

export const useGetPopularActorDetailsRepo = (
  id: number,
  enabled: boolean
): APIResult<IActorDetail> => {
  const { data: dto, isLoading, isError } = useGetPersonDetails(id, enabled);

  const data = dto && MapActorDetails(dto);

  return { data, isLoading, isError };
};
