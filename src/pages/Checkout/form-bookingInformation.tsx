import TextInput from "@/components/TextInput";

export default function Form_BookingInformation() {
  return (
    <div className="">
      <TextInput
        type="text"
        label="First Name"
        placeholder="Please Type Here ..."
        containerClassName=""
      />
      <TextInput
        type="text"
        label="Last Name"
        placeholder="Please Type Here ..."
        containerClassName="mt-3"
      />
      <TextInput
        type="email"
        label="Email Address"
        placeholder="Please Type Here ..."
        containerClassName="mt-3"
      />
      <TextInput
        type="number"
        // pattern="[0-9]"
        label="Phone Number"
        placeholder="Please Type Here ..."
        containerClassName="mt-3"
      />
    </div>
  );
}
