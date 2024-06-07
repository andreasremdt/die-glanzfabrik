import { Radio, RadioGroup as NativeRadioGroup } from "@headlessui/react";

export type Option = {
  name: string;
  description?: string;
};

type Props<T> = {
  options: Option[];
  className?: string;
  selected: T;
  onChange(selected: T): void;
};

export default function RadioGroup<T>({
  options,
  className,
  selected,
  onChange,
}: Props<T>) {
  return (
    <NativeRadioGroup
      aria-label="paket auswählen"
      className={className}
      defaultValue={selected}
      onChange={onChange}
    >
      {options.map((option) => (
        <Radio
          key={option.name}
          value={option.name}
          className="fancy-border group relative flex cursor-pointer rounded-lg bg-gradient-to-r from-white/15 to-white/5 px-5 py-4 text-white shadow-md transition focus:outline-none data-[checked]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          <div className="flex w-full items-center justify-between text-sm/6">
            <div>
              <p className="font-medium text-white">{option.name}</p>
              {option.description ? (
                <div className="text-white/50">{option.description}</div>
              ) : null}
            </div>

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
          </div>
        </Radio>
      ))}
    </NativeRadioGroup>
  );
}
