import { options } from "@/app/constants/arrays/radioOptions";
import { useId } from "react";

export const RadioChoice = () => {
  const uniqueId = useId();
  return (
    <ul className="flex gap-4">
      {options.map((option) => (
        <li key={option.id}>
          <label
            htmlFor={`${uniqueId}-${option.id}`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={uniqueId}
              id={`${uniqueId}-${option.id}`}
              className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-pink-200 checked:border-pink-100"
            />
            <span className="text-zinc-200 font-semibold">{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
