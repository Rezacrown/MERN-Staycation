import TextInput from "@/components/TextInput";

export default function Form_BookingPayment() {
  return (
    <div className="">
      <TextInput
        type="file"
        label="Upload Bukti Transfer"
        required
        placeholder="Browse a file"
        containerClassName=""
      />
      <TextInput
        type="text"
        placeholder="Please type here ..."
        label="Asal Bank"
        required
        containerClassName="mt-3"
      />
      <TextInput
        type="text"
        placeholder="Please type here ..."
        label="Nama Pengirim"
        required
        containerClassName="mt-3"
      />
    </div>
  );
}
