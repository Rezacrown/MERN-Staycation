import "./index.scss";

export default function TextInput({
  haveLabel = true,
  label,
  type = "text",
  placeholder,
  value,
  readyOnly,
  InputClassName,
  LabelClassName,
}: TextInputProps) {
  return (
    <div className="text-input">
      {haveLabel && (
        <label className={["text-primary", LabelClassName].join(" ")}>
          {label}
        </label>
      )}
      <input
        className={["", InputClassName].join(" ")}
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readyOnly}
      />
    </div>
  );
}

interface TextInputProps {
  haveLabel?: boolean;
  label?: string;
  type?: "text" | "number" | "email";
  placeholder?: string;
  value?: string | number;
  readyOnly?: boolean;
  InputClassName?: string;
  LabelClassName?: string;
}
