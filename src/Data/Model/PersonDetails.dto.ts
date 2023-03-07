export interface PersonDetailsDTO {
  birthday?: string | null;
  known_for_department?: string;
  deathday?: string | null;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: 0 | 1 | 2 | 3;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string | null;
  hompage?: string | null;
}
