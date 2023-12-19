export interface LandingPageProps {
  hero: HeroProps;
  mostPicked: MostPickedprops[];
  categories: CategoriesProps[];
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
  title: string;
  type: string;
  imageId: [
    {
      _id: string;
      imageUrl: string;
    }
  ];
  country: string;
  city: string;
  price: string;
  unit: string;
}

export interface CategoriesProps {
  _id: string;
  name: string;
  itemId: items[];
}

interface items {
  _id: string;
  title: string;
  country: string;
  city: string;
  isPopular: boolean;
  imageId: [
    {
      _id: string;
      imageUrl: string;
    }
  ];
}

export interface TestimonialProps {
  _id: string;
  imageUrl: string;
  name: string;
  rate: number;
  content: string;
  familyName: string;
  familyOccupation: string;
}
