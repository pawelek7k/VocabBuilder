import { options } from "@/app/constants/arrays/radioOptions";

export const RadioChoice = () => {
  return (
    <ul className="flex gap-4">
      {options.map((option) => (
        <li key={option.id}>
          <label
            htmlFor={option.id}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="choice"
              id={option.id}
              className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-pink-200 checked:border-pink-100"
            />
            <span className="text-zinc-200 font-semibold">{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
