import StickyFooter from "../../layouts/footer/footer.component";

export function TrainerProfile(){
    return(
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
            overflow: "hidden",
            paddingTop: 10,
          }}
        >
            
        </Box>
        </Box>
        <StickyFooter />
        </>
    )
}