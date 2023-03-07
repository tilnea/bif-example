export interface PersonImageDTO {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface PersonImagesDTO {
  id: number;
  profiles: PersonImageDTO[];
}
