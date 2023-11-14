import "./index.scss";

export default function TextInput({
  haveLabel = true,
  label,
  type = "text",
  pattern,
  placeholder,
  value,
  readyOnly,
  InputClassName,
  LabelClassName,
  containerClassName,
}: TextInputProps) {
  return (
    <div className={["text-input", containerClassName].join(" ")}>
      <div>
        {haveLabel && (
          <label className={["", LabelClassName].join(" ")}>{label}</label>
        )}
      </div>
      <div>
        <input
          className={["", InputClassName].join(" ")}
          // style={type === "number" ? {  } : {}}
          type={type}
          pattern={pattern && pattern}
          placeholder={placeholder}
          value={value}
          readOnly={readyOnly}
        />
      </div>
    </div>
  );
}

interface TextInputProps {
  haveLabel?: boolean;
  label?: string;
  type?: "text" | "number" | "email" | "tel";
  pattern?: string;
  placeholder?: string;
  value?: string | number;
  readyOnly?: boolean;
  InputClassName?: string;
  LabelClassName?: string;
  containerClassName?: string;
}
