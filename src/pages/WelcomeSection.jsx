import React, { useState } from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

const WelcomeSection = ({ darkMode }) => {
  // حالة لحفظ البيانات من الـ inputs
  const [formData, setFormData] = useState({
    titleAr: "",
    titleEn: "",
    descriptionAr: "",
    descriptionEn: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
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
          Landing Page / Welcome Section
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
          rows={4}
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
          rows={4}
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
          rows={6}
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
          rows={6}
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

      {/* حقل رفع الصورة */}
     {/* حقل رفع الصور */}
{/* حقل رفع الصور */}
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
    padding: 2,
    borderRadius: "12px",
    mb: 3,
    position: "relative",
    cursor: "pointer",
  }}
  onClick={() => document.getElementById("image-upload-input").click()} // يجعل الحقل قابلاً للنقر
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography
      sx={{
        color: darkMode ? "#fff" : "#000",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      Upload your img here (Upload at Least {12 - (formData.images?.length || 0)} img)
    </Typography>
    <IconButton>
      {/* ضع الأيقونة هنا */}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <g clip-path="url(#clip0_4740_5203)">
    <path d="M4.34591 8.24929C2.70732 8.63893 1.48853 10.1123 1.48853 11.87C1.48853 13.9253 3.15465 15.5915 5.21004 15.5915C5.56247 15.5915 5.90373 15.5423 6.22713 15.4508M13.4178 8.24929C15.0564 8.63893 16.2749 10.1123 16.2749 11.87C16.2749 13.9253 14.6087 15.5915 12.5533 15.5915C12.2009 15.5915 11.8596 15.5423 11.5366 15.4508M13.3974 8.14844C13.3974 5.68219 11.3978 3.68262 8.93156 3.68262C6.46531 3.68262 4.46574 5.68219 4.46574 8.14844M6.35069 11.0814L8.93156 8.49231L11.5857 11.1257M8.93156 14.8472V9.80898" stroke="#FF2A66" stroke-width="1.48861" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_4740_5203">
      <rect width="17.8633" height="17.8633" fill="white" transform="translate(0 0.705078)"/>
    </clipPath>
  </defs>
</svg>
    </IconButton>
  </Box>
  <input
    id="image-upload-input"
    type="file"
    accept="image/*"
    multiple
    onChange={(e) => {
      const files = Array.from(e.target.files);
      const currentImages = formData.images || [];
      if (files.length + currentImages.length > 12) {
        alert("You can only upload up to 12 images.");
      } else {
        setFormData({
          ...formData,
          images: [...currentImages, ...files],
        });
      }
    }}
    style={{
      display: "none", // إخفاء الحقل الفعلي
    }}
  />
  {/* عرض الصور المرفوعة */}
  {formData.images && (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mt: 2,
      }}
    >
      {formData.images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            width: "100px",
            height: "100px",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#050A17",
          }}
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`Uploaded ${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <IconButton
            onClick={() => {
              const updatedImages = formData.images.filter(
                (_, imgIndex) => imgIndex !== index
              );
              setFormData({ ...formData, images: updatedImages });
            }}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              padding: "4px",
            }}
          >
            <CloseIcon sx={{ fontSize: "16px" }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  )}
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

export default WelcomeSection;
