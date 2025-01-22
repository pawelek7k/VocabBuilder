import { Overlay } from "../Overlay";
import { PartOfSpeechSelector } from "./PartOfSpeech";
import { RadioChoice } from "./RadioChoice";

export const AddWordModal = () => {
  return (
    <Overlay>
      <div className="bg-white/70 backdrop-blur-md md:p-6 rounded-md flex gap-6 flex-col justify-center w-full md:w-[50rem] dark:bg-black/70">
        <h2>Add word</h2>
        <p>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
        <RadioChoice />
        <PartOfSpeechSelector />
      </div>
    </Overlay>
  );
};
