import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import List from "@mui/material/List";
import AddIcon from "@mui/icons-material/Add";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Card, CardContent, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { SelectInput } from "../components/selectComponent";
import DoneIcon from "@mui/icons-material/Done";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainHomeDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Welcome to my Application
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#26AAE1" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              New Transhipment Entry
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <Card sm={12} md={6} lg={8}>
            <CardContent>
              <Typography
                sx={{ padding: "10px 40px", color: "#26AAE1" }}
                variant="h6"
                component="div"
              >
                Offloading Car
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "1px 4px",
                }}
              >
                <SelectInput />
                <SelectInput />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: "92%",
                  paddingBottom: "20px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16.7493px",
                      lineWeight: "20px",
                      color: "#26AAE1",
                    }}
                    variant="h6"
                    component="div"
                  >
                    Product details
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "8px",
                      lineHeight: "15px",
                      color: "#26AAE1",
                    }}
                    variant="outlined"
                    startIcon={<AddIcon />}
                  >
                    Add New Product
                  </Button>
                </Box>
              </Box>
              <Divider
                sx={{
                  border: "1px solid rgba(38, 170, 225, 0.29)",
                  transform: "rotate(0.09deg)",
                }}
              />
              <Box
                sx={{
                  border: "1px solid rgba(38, 170, 225, 0.29)",
                  transform: "rotate(0.09deg)",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                  padding: "20px",

                  background: "rgba(38, 170, 225, 0.04)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineWeight: "20px",
                    color: "#000000",
                  }}
                  variant="h6"
                  component="div"
                >
                  Sugar
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineWeight: "20px",
                    color: "#000000",
                  }}
                  variant="h6"
                  component="div"
                >
                  23 KG/item
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineWeight: "20px",
                    color: "#000000",
                  }}
                  variant="h6"
                  component="div"
                >
                  50 KG/item
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineWeight: "20px",
                    color: "#000000",
                  }}
                  variant="h6"
                  component="div"
                >
                  <DoneIcon
                    sx={{
                      color: "#26AAE1",
                      fontWeight: "500",
                      fontSize: "30px",
                    }}
                  />
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </List>
      </Dialog>
    </div>
  );
}
