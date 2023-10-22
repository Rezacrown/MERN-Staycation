export interface LandingPageProps {
  hero: HeroProps;
  mostPicked: MostPickedprops[];
  categories: any;
  testimonial: any;
}

//
export interface HeroProps {
  travelers: number;
  treasures: number;
  cities: number;
}

export interface MostPickedprops {
  _id: string;
  name: string;
  type: string;
  imageUrl: string;
  country: string;
  city: string;
  price: string;
  unit: string;
}
