import TextInput from "@/components/TextInput";
// import {useState} from 'react'

export default function Form_BookingInformation({
  CheckoutInfo,
  setCheckoutInfo,
}: Form_BookingInformationprops) {
  // const [CheckoutInfo, setCheckoutInfo] = FormState;

  return (
    <div className="">
      <TextInput
        type="text"
        label="First Name"
        required
        placeholder="Please Type Here ..."
        containerClassName=""
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            firstName: e.currentTarget.value,
          })
        }
      />
      <TextInput
        type="text"
        label="Last Name"
        required
        placeholder="Please Type Here ..."
        containerClassName="mt-3"
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            lastName: e.currentTarget.value,
          })
        }
      />
      <TextInput
        type="email"
        label="Email Address"
        required
        placeholder="Please Type Here ..."
        containerClassName="mt-3"
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            email: e.currentTarget.value,
          })
        }
      />
      <TextInput
        type="number"
        // pattern="[0-9]"
        label="Phone Number"
        required
        placeholder="Please Type Here ..."
        containerClassName="mt-3"
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            phone: e.currentTarget.value,
          })
        }
      />
    </div>
  );
}

interface Form_BookingInformationprops {
  CheckoutInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    accountHolder: string;
    bankFrom: string;
    proofPayment: any;
  };
  setCheckoutInfo: (e: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    accountHolder: string;
    bankFrom: string;
    proofPayment: any;
  }) => void;
}
