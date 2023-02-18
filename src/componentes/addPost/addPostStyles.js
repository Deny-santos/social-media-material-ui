import { Modal, styled } from "@mui/material"
import { Box } from "@mui/material"

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 5%",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

export {
    StyledModal,
    UserBox,
}