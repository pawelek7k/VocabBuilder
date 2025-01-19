import { AddWord } from "./AddWord";
import { RadioChoice } from "./RadioChoice";
import { SearchInput } from "./SearchInput";
import { TrainLink } from "./TrainLink";
import { WordStudyLength } from "./WordStudyLength";

export const FuctionsContainer = () => {
  return (
    <div className="p-4 flex justify-around items-center">
      <div className="flex items-center gap-6">
        <SearchInput />
        <RadioChoice />
      </div>
      <div className="flex items-center gap-6">
        <WordStudyLength />
        <AddWord />
        <TrainLink />
      </div>
    </div>
  );
};
