import { IPopularActorListing } from "../../../Domain/Model/IPopularActorListing";
import { IActorDetail } from "../../../Domain/Model/IActorDetail";

import { PopularPersonDTO } from "../../Model/PopularPeople.dto";
import { PersonImageDTO } from "../../Model/PersonImages.dto";
import { PersonDetailsDTO } from "../../Model/PersonDetails.dto";

const imageBase = "https://image.tmdb.org/t/p/w500/";

export const MapPopularActor = (
  dto: PopularPersonDTO
): IPopularActorListing => {
  return { id: dto.id, name: dto.name };
};

export const MapActorImagePath = (dto: PersonImageDTO): string => {
  return `${imageBase}${dto.file_path}`;
};

export const MapActorDetails = (dto: PersonDetailsDTO): IActorDetail => {
  return {
    id: dto?.id,
    name: dto?.name,
    biography: dto?.biography,
  };
};
