import { RadioChoice } from "./RadioChoice";
import { SearchInput } from "./SearchInput";
import { WordStudyLength } from "./WordStudyLength";

export const FuctionsContainer = () => {
  return (
    <div className="p-4 flex justify-around items-center">
      <div className="flex items-center gap-6">
        <SearchInput />
        <RadioChoice />
      </div>
      <div>
        <WordStudyLength />
      </div>
    </div>
  );
};
