import { RadioChoice } from "./RadioChoice";
import { SearchInput } from "./SearchInput";

export const FuctionsContainer = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-6">
        <SearchInput />
        <RadioChoice />
      </div>
    </div>
  );
};
