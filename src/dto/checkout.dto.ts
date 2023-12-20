export interface CheckoutPostDTO {
  itemId: string;
  proofPayment: File;
  duration: number;
  bookingStartDate: Date;
  bookingEndDate: Date;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  accountHolder: string;
  bankFrom: string;
}
