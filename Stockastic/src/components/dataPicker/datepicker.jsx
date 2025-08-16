import { useEffect, useRef } from "react";
import "flowbite";
import "flowbite-datepicker";


function DatePicker({ onChange }) {
  const inputRef = useRef(null);
 useEffect(() => {
    if (inputRef.current && window.Datepicker) {
      const datepicker = new window.Datepicker(inputRef.current, {
        autohide: true,
        format: "yyyy-MM-dd", // strict year-month-day
        todayHighlight: true,
        language: "en", // ensure month names are not in words
      });

      inputRef.current.addEventListener("changeDate", (e) => {
        if (onChange) {
          const selectedDate = datepicker.getDate(); // JS Date object
          const formatted =
            selectedDate instanceof Date
              ? selectedDate.toISOString().split("T")[0] // "YYYY-MM-DD"
              : "";
          onChange(formatted);
        }
      });

      return () => {
        datepicker.destroy();
      };
    }
  }, [onChange]);
  return (
    <div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input ref={inputRef} datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
</div>
  );
}

export default DatePicker;
