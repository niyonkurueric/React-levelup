import React from "react";
import Select from "react-select";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box } from "@mui/system";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const SelectInput = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ display: "block" }}>
          <div
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "15px",
              lineHeight: "18px",
              color: "#000000",
            }}
          >
            Select car plate number
          </div>
          <div
            style={{
              display: "flex",
              width: "600px",
              paddingBottom: "40px",
            }}
          >
            <div
              style={{
                width: "500px",
              }}
            >
              <Select options={options} />
            </div>
            <AddBoxIcon
              style={{
                width: "42px",
                height: "40px",
                borderRadius: "5px",
                color: "#26AAE1",
              }}
            />
          </div>
        </div>
      </Box>
    </>
  );
};
