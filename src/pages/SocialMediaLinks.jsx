import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

function SocialMediaLinks({ darkMode }) {
  const theme = useTheme();

  const [links, setLinks] = useState({
    facebook: "",
    whatsapp: "",
    xWebsite: "",
    telegram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks({ ...links, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved Links:", links);
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
      {/* العنوان مع الأيقونة */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <LinkIcon sx={{ color: "#FF2A66", fontSize: "24px", mr: 1 }} />
        <Typography variant="h6" component="h1">
          Social Media Links
        </Typography>
      </Box>

      {/* حقول إدخال الروابط */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
          mb: 3,
        }}
      >
        {["facebook", "whatsapp", "xWebsite", "telegram"].map((platform) => (
          <TextField
            key={platform}
            label={platform.charAt(0).toUpperCase() + platform.slice(1)}
            placeholder="Put your link here"
            name={platform}
            value={links[platform]}
            onChange={handleChange}
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
        ))}
      </Box>

      {/* زر الحفظ */}
      <Button
        onClick={handleSave}
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
  );
}

export default SocialMediaLinks;
