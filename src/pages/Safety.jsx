import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";


function Safety({darkMode}) {
    const [activeCard, setActiveCard] = useState("First Card");

  const handleCardClick = (card) => {
    setActiveCard(card);
  };
  return (
    <Box
    sx={{
      padding: 3,
      backgroundColor: darkMode ? "#050A17" : "#fff",
      color: darkMode ? "#fff" : "#000",
      borderRadius: "12px",
    }}
  >
    {/* العنوان */}
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      <Typography variant="h6" component="h1">
        Landing Page /  Safety
      </Typography>
    </Box>

    {/* الأزرار */}
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
      }}
    >
      {["First Card", "Second Card", "Third Card", "Fourth Card"].map(
        (card) => (
          <Button
            key={card}
            onClick={() => handleCardClick(card)}
            sx={{
              borderRadius: "8px",
              background:
                activeCard === card
                  ? "var(--primary-purple, #9022FF)"
                  : darkMode
                  ? "#131D32"
                  : "#f5f5f5",
              color: activeCard === card ? "#fff" : darkMode ? "#fff" : "#000",
              fontWeight: "bold",
              padding: "10px 20px",
              textTransform: "none",
              "&:hover": {
                background:
                  activeCard === card
                    ? "var(--primary-purple, #9022FF)"
                    : darkMode
                    ? "#1E2A40"
                    : "#e0e0e0",
              },
            }}
          >
            {card}
          </Button>
        )
      )}
    </Box>

    {/* الحقول */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 2,
        mb: 3,
      }}
    >
      <TextField
        label="Title (Arabic)"
        placeholder="اكتب هنا"
        multiline
        rows={3}
        InputProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        InputLabelProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        sx={{
          backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#4B6A9B" : "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#FF2A66",
            },
          },
        }}
      />
      <TextField
        label="Title (English)"
        placeholder="Write here"
        multiline
        rows={3}
        InputProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        InputLabelProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        sx={{
          backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#4B6A9B" : "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#FF2A66",
            },
          },
        }}
      />
      <TextField
        label="Description (Arabic)"
        placeholder="اكتب هنا"
        multiline
        rows={5}
        InputProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        InputLabelProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        sx={{
          backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#4B6A9B" : "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#FF2A66",
            },
          },
        }}
      />
      <TextField
        label="Description (English)"
        placeholder="Write here"
        multiline
        rows={5}
        InputProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        InputLabelProps={{
          style: { color: darkMode ? "#fff" : "#000" },
        }}
        sx={{
          backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#4B6A9B" : "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#FF2A66",
            },
          },
        }}
      />
    </Box>
    <Box
sx={{
  display: "flex",
  alignItems: "center",
  backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
  borderRadius: "12px",
  padding: "10px 15px",
  border: `1px solid ${darkMode ? "#4B6A9B" : "#ccc"}`,
  width: "50%", // عرض الحقل نصف المساحة
  "&:hover": {
    borderColor: "#FF2A66",
  },
  mb: 3, // مساحة أسفل الحقل
}}
>
{/* النص داخل الحقل */}
<Typography
  sx={{
    flex: 1,
    color: darkMode ? "#fff" : "#000",
    fontSize: "16px",
  }}
>
  Icons
</Typography>

{/* الأيقونة في الجهة اليمنى */}
<Box>
  {/* استبدل هذه الأيقونة بأيقونتك */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
  >
    <g clipPath="url(#clip0_4740_5203)">
      <path
        d="M4.34591 8.24929C2.70732 8.63893 1.48853 10.1123 1.48853 11.87C1.48853 13.9253 3.15465 15.5915 5.21004 15.5915C5.56247 15.5915 5.90373 15.5423 6.22713 15.4508M13.4178 8.24929C15.0564 8.63893 16.2749 10.1123 16.2749 11.87C16.2749 13.9253 14.6087 15.5915 12.5533 15.5915C12.2009 15.5915 11.8596 15.5423 11.5366 15.4508M13.3974 8.14844C13.3974 5.68219 11.3978 3.68262 8.93156 3.68262C6.46531 3.68262 4.46574 5.68219 4.46574 8.14844M6.35069 11.0814L8.93156 8.49231L11.5857 11.1257M8.93156 14.8472V9.80898"
        stroke="#FF2A66"
        strokeWidth="1.48861"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4740_5203">
        <rect
          width="17.8633"
          height="17.8633"
          fill="white"
          transform="translate(0 0.705078)"
        />
      </clipPath>
    </defs>
  </svg>
</Box>
</Box>


    {/* زر الحفظ */}
    <Button
      variant="contained"
      sx={{
        borderRadius: "12px",
        padding: "10px 20px",
        background:
          "linear-gradient(238deg, #E9BA00 -48.58%, #FF2A66 59.6%)",
        color: "#fff",
        fontWeight: "bold",
        "&:hover": {
          background:
            "linear-gradient(238deg, #FF2A66 -48.58%, #E9BA00 59.6%)",
        },
      }}
    >
      Save Changes
    </Button>
  </Box>
  )
}

export default Safety