import Brandicon from "@/components/BrandIcon";
import Stepper from "@/components/Stepper";

export default function CheckoutPage() {
  return (
    <div>
      <Brandicon isCenter />
      <Stepper step={[1, 2, 3]} currentStep={2} successStep={[1]} />
    </div>
  );
}
