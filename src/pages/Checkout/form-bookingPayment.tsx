import TextInput from "@/components/TextInput";

export default function Form_BookingPayment({
  CheckoutInfo,
  setCheckoutInfo,
}: Form_BookingInformationprops) {
  // const [CheckoutInfo, setCheckoutInfo] = FormState;

  return (
    <div className="">
      <TextInput
        type="file"
        label="Upload Bukti Transfer"
        required
        placeholder="Browse a file"
        containerClassName=""
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            proofPayment: e.currentTarget.files![0],
          })
        }
      />
      <TextInput
        type="text"
        placeholder="Please type here ..."
        label="Asal Bank"
        required
        containerClassName="mt-3"
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            bankFrom: e.currentTarget.value,
          })
        }
      />
      <TextInput
        type="text"
        placeholder="Please type here ..."
        label="Nama Pengirim"
        required
        containerClassName="mt-3"
        handleChange={(e) =>
          setCheckoutInfo({
            ...CheckoutInfo,
            accountHolder: e.currentTarget.value,
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
