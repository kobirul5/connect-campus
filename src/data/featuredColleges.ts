export interface College {
  _id: string;

  name: string;
  image: string;
  admissionDates: string;
  events: {
    name: string;
    date: string;
  }[];
  researchHistory: {
    title: string;
    year: number;
  }[];
  sports: string[];
  rating: number;
  description: string;
}

