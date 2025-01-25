import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const HeroSection = ({ darkMode }) => {
  // حالة لحفظ البيانات من الـ inputs
  const [formData, setFormData] = useState({
    titleAr: "",
    titleEn: "",
    descriptionAr: "",
    descriptionEn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: darkMode ? "#050A17" : "#fff", // لون الخلفية حسب الوضع
        color: darkMode ? "#fff" : "#000", // لون النصوص حسب الوضع
        borderRadius: "12px",
      }}
    >
      {/* العنوان مع الأيقونة */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <HomeIcon sx={{ color: "#FF2A66", fontSize: "24px", mr: 1 }} />
        <Typography variant="h6" component="h1">
          Landing Page / Hero Section
        </Typography>
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
          name="titleAr"
          value={formData.titleAr}
          onChange={handleChange}
          InputProps={{
            style: { color: darkMode ? "#fff" : "#000" }, // لون النص حسب الوضع
          }}
          InputLabelProps={{
            style: { color: darkMode ? "#fff" : "#000" }, // لون العنوان حسب الوضع
          }}
          sx={{
            backgroundColor: darkMode ? "#131D32" : "#f5f5f5", // خلفية الحقل
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: darkMode ? "#4B6A9B" : "#ccc", // لون الحدود حسب الوضع
              },
              "&:hover fieldset": {
                borderColor: "#FF2A66", // لون الحدود عند التحويم
              },
            },
          }}
        />
        <TextField
          label="Title (English)"
          placeholder="Write here"
          multiline
          rows={3}
          name="titleEn"
          value={formData.titleEn}
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
        <TextField
          label="Description (Arabic)"
          placeholder="اكتب هنا"
          multiline
          rows={5}
          name="descriptionAr"
          value={formData.descriptionAr}
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
                borderColor: darkMode ? "#050A17" : "#ccc",
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
          name="descriptionEn"
          value={formData.descriptionEn}
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
};

export default HeroSection;
