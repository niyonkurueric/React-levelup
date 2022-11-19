import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MainHomeDialog from "./homeDialog";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 200,
        },
      }}
    >
      <Paper elevation={1}>
        <MainHomeDialog />
      </Paper>
    </Box>
  );
}
