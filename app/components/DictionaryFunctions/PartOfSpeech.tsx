import { PartOfSpeech } from "@/models/partOfSpeech";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export const PartOfSpeechSelector = () => {
  const [selectedPart, setSelectedPart] = useState<PartOfSpeech | "">("");

  const handleSelect = (event: SelectChangeEvent<PartOfSpeech>) => {
    setSelectedPart(event.target.value as PartOfSpeech);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 400,
        mx: "auto",
        bgcolor: "transparent",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="part-of-speech-label" sx={{ color: "white" }}>
          Part of Speech
        </InputLabel>
        <Select
          labelId="part-of-speech-label"
          id="part-of-speech-select"
          value={selectedPart}
          label="Part of Speech"
          onChange={handleSelect}
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          {Object.values(PartOfSpeech).map((part) => (
            <MenuItem key={part} value={part} sx={{ color: "black" }}>
              {part.charAt(0).toUpperCase() + part.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
