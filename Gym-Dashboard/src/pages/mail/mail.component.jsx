import Box from "@mui/material/Box";
import SideBar from "../../layouts/sidebar/sidebar.component";
import StickyFooter from "../../layouts/footer/footer.component";
export function Mail() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            p: 8,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <div>hello mail;</div>;
        </Box>
      </Box>
      <StickyFooter />
    </>
  );
}
