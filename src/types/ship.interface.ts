export interface Ship {
  id: string;
  image: string;
  name: string;
  type: string;
  year_built: number;
  weight_kg: number;
  active: boolean;
  url: string;
  home_port: string;
}

export interface ShipsResponse {
  data: {
    ships: Ship[];
  };
}
