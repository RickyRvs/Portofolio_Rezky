import React, { useState } from "react"
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box component="div" sx={{ width: "100%" }}>
      {/* Thumbnail */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid #e2e8f0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          bgcolor: "white",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 32px rgba(99,102,241,0.12)",
            borderColor: "#a5b4fc",
            "& .overlay": { opacity: 1 },
            "& .hover-content": {
              transform: "translate(-50%, -50%)",
              opacity: 1
            },
            "& .certificate-image": {
              filter: "brightness(0.92) contrast(1.05)"
            }
          }
        }}
      >
        {/* Certificate Image */}
        <img
          className="certificate-image"
          src={ImgSertif}
          alt="Certificate"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            filter: "brightness(1) contrast(1.04) saturate(1.05)",
            transition: "filter 0.3s ease",
            aspectRatio: "16/11.5",
            cursor: "pointer"
          }}
          onClick={handleOpen}
        />

        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            transition: "all 0.3s ease",
            cursor: "pointer",
            background: "rgba(99,102,241,0.08)",
            zIndex: 2
          }}
          onClick={handleOpen}
        >
          <Box
            className="hover-content"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              opacity: 0,
              transition: "all 0.4s ease",
              textAlign: "center",
              color: "#4338ca"
            }}
          >
            <FullscreenIcon sx={{ fontSize: 36, mb: 0.5 }} />
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 14 }}>
              View Certificate
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(15,23,42,0.75)",
            backdropFilter: "blur(6px)"
          }
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35)"
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              bgcolor: "rgba(255,255,255,0.9)",
              color: "#334155",
              zIndex: 1,
              "&:hover": {
                bgcolor: "white",
                transform: "scale(1.1)"
              }
            }}
            size="medium"
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain"
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}

export default Certificate