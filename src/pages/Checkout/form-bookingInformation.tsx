import TextInput from "@/components/TextInput";
// import {useState} from 'react'

export default function Form_BookingInformation({
  FormState,
}: {
  FormState: [any, any];
}) {
  const [CheckoutInfo, setCheckoutInfo] = FormState;

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
