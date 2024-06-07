import { Checkbox as NativeCheckbox, Field, Label } from "@headlessui/react";

type Props = {
  label: string;
  description?: string;
  checked: boolean;
  onChange(name: string, checked: boolean): void;
};

export default function Checkbox({
  label,
  description,
  checked,
  onChange,
}: Props) {
  return (
    <Field>
      <NativeCheckbox
        checked={checked}
        onChange={(checked) => onChange(label, checked)}
        value={label}
        className="fancy-border group relative flex w-full cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-white/15 to-white/5 p-1 px-5 py-4 text-white shadow-md ring-1 ring-inset ring-white/15 transition focus:outline-none data-[checked]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <Label className="w-full items-center justify-between text-sm/6">
          <p className="font-medium text-white">{label}</p>
          {description ? (
            <div className="flex gap-2 text-white/50">{description}</div>
          ) : null}
        </Label>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      </NativeCheckbox>
    </Field>
  );
}
