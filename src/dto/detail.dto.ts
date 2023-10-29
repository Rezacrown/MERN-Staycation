export interface DetailPageProps {
  _id: string;
  name: string;
  type: string;
  country: string;
  city: string;
  price: string;
  unit: number;
  isPopular: boolean;
  hasBackyard: boolean;
  description: string;
  imageUrls: imageUrls[];
  features: features[];
  activities: activities[];
  categories: categories[];
  testimonial: testimonial;
}

//
type imageUrls = {
  _id: string;
  url: string;
};

//
type features = {
  _id: string;
  qty: string;
  name: string;
  imageUrl: string;
};

//
type activities = {
  _id: string;
  name: string;
  type: string | "Nature" | "Pool";
  imageUrl: string;
};

//
type categories = {
  _id: string;
  name: string;
  items: items[];
};
type items = {
  _id: string;
  name: string;
  imageUrl: string;
  country: string;
  city: string;
  isPopular: boolean;
};

// 
type testimonial = {
  _id: string;
  imageUrl: string;
  name: string;
  rate: number;
  content: string;
  familyName: string;
  familyOccupation: string;
};
