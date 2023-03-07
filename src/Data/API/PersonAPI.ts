import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../secret";
import { PopularPeopleDTO } from "../Model/PopularPeople.dto";
import { PersonDetailsDTO } from "../Model/PersonDetails.dto";
import { PersonImagesDTO } from "../Model/PersonImages.dto";

const personUrl = "https://api.themoviedb.org/3/person";

const fetchPopularPeople = async (): Promise<PopularPeopleDTO> => {
  const res = await axios.get(
    `${personUrl}/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
};

const fetchPersonDetails = async (id: number): Promise<PersonDetailsDTO> => {
  const res = await axios.get(
    `${personUrl}/${id}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

const fetchPersonImages = async (id: number): Promise<PersonImagesDTO> => {
  const res = await axios.get(`${personUrl}/${id}/images?api_key=${API_KEY}`);
  return res.data;
};

export const useGetPopularPeople = () => {
  const query = useQuery<PopularPeopleDTO>({
    queryKey: ["popularPeople"],
    queryFn: fetchPopularPeople,
    staleTime: 3600000,
  });

  return query;
};

export const useGetPersonImages = (id: number, enabled: boolean) => {
  const query = useQuery({
    queryKey: ["actor-images", id],
    queryFn: () => fetchPersonImages(id),
    enabled: enabled,
    staleTime: 3600000,
  });

  return query;
};

export const useGetPersonDetails = (id: number, enabled: boolean) => {
  const query = useQuery({
    queryKey: ["actor-details", id],
    queryFn: () => fetchPersonDetails(id),
    enabled: enabled,
    staleTime: 3600000,
  });

  return query;
};
