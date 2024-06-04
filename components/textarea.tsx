import { type ComponentProps, type Ref, forwardRef } from "react";

type Props = ComponentProps<"textarea"> & {
  error?: string;
  label?: string;
  id: string;
};

export default forwardRef(function Input(
  { error, label, id, className, required, ...props }: Props,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div className={className}>
      {label ? (
        <label className="label" htmlFor={id}>
          {label}{" "}
          {required ? (
            <span className="text-sm uppercase text-neutral-500">
              Pflichtfeld
            </span>
          ) : null}
        </label>
      ) : null}

      <textarea
        className="input min-h-28"
        id={id}
        {...props}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        ref={ref}
      />

      {error ? (
        <p
          className="text-rose-300 text-sm mt-1"
          aria-live="assertive"
          id={`${id}-error`}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
});
