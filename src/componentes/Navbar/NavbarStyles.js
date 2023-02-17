import { Box, styled, Toolbar } from "@mui/material";


export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
}) 

export const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"

}))

export const Icons = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex",
        
    }
}))

export const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
}))

//obs: it´s look like the reverse way, but is the correctly way to put breakpoints on userBox and Icons