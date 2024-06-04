import { useCallback, useEffect, useRef } from "react";

export default function useFocusTrap(active: boolean) {
  const container = useRef<HTMLDivElement>(null);

  let handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const focusable =
        container.current?.querySelectorAll<HTMLElement>("a, button");

      if (event.key === "Tab" && active && focusable && focusable.length > 0) {
        if (event.shiftKey) {
          if (document.activeElement === focusable[0]) {
            event.preventDefault();

            focusable[focusable.length - 1].focus();
          }
        } else if (document.activeElement === focusable[focusable.length - 1]) {
          event.preventDefault();

          focusable[0].focus();
        }
      }
    },
    [active],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return container;
}
