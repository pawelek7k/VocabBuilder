import { AddWord } from "./AddWord";
import { RadioChoice } from "./RadioChoice";
import { SearchInput } from "./SearchInput";
import { TrainLink } from "./TrainLink";
import { WordStudyLength } from "./WordStudyLength";

const SearchSection = () => (
  <div className="flex items-center gap-6">
    <SearchInput />
    <RadioChoice />
  </div>
);

const ActionSection = () => (
  <div className="flex items-center gap-6">
    <WordStudyLength />
    <AddWord />
    <TrainLink />
  </div>
);

export const FunctionsContainer = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row justify-around items-center gap-6">
      <SearchSection />
      <ActionSection />
    </div>
  );
};
