export interface PopularPersonDTO {
  id?: number;
  name?: string;
  profile_path?: string;
  adult?: boolean;
  popularity?: number;
}

export interface PopularPeopleDTO {
  page?: number;
  results?: PopularPersonDTO[];
  total_results?: number;
  total_pages?: number;
}
