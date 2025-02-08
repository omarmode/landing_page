import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "react-quill/dist/quill.snow.css"; // استيراد أنماط ReactQuill
import ReactQuill from "react-quill";
import { styled } from "@mui/system";

const AboutUsPage = ({ darkMode }) => {
  const [descriptionArabic, setDescriptionArabic] = useState("");
  const [descriptionEnglish, setDescriptionEnglish] = useState("");

  // إعدادات شريط الأدوات
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"], // التنسيق
        [{ header: 1 }, { header: 2 }], // العناوين
        [{ list: "ordered" }, { list: "bullet" }], // القوائم
        [{ align: [] }], // المحاذاة
        ["link"], // الروابط
        ["undo", "redo"], // التراجع
      ],
    },
  };

  // تخصيص المحرر مع شريط الأدوات أسفله
  const EditorContainer = styled("div")({
    display: "flex",
    flexDirection: "column-reverse", // عكس الاتجاه لجعل شريط الأدوات بالأسفل
    borderRadius: "12px",
    backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
    "& .ql-container": {
      minHeight: "150px",
      border: "none",
      padding: "10px",
      color: darkMode ? "#fff" : "#000",
    },
    "& .ql-toolbar": {
      borderTop: "1px solid",
      borderColor: darkMode ? "#333" : "#ddd",
      backgroundColor: darkMode ? "#131D32" : "#f5f5f5",
      borderRadius: "12px 12px 0 0", // حواف علوية دائرية فقط
    },
  });

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: "12px",
        backgroundColor: darkMode ? "#050A17" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      {/* العنوان */}
      <Typography
        variant="h6"
        component="h1"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: darkMode ? "#FF2A66" : "#E91E63",
        }}
      >
        About Us
      </Typography>

      {/* المحرر الأول (Arabic) */}
      <Typography
        variant="body1"
        sx={{
          mb: 1,
          fontWeight: "bold",
          color: darkMode ? "#ccc" : "#555",
        }}
      >
        Description (Arabic)
      </Typography>
      <EditorContainer>
        <ReactQuill
          value={descriptionArabic}
          onChange={setDescriptionArabic}
          modules={modules}
          theme="snow"
          placeholder="اكتب هنا..."
        />
      </EditorContainer>

      {/* المحرر الثاني (English) */}
      <Typography
        variant="body1"
        sx={{
          mt: 3,
          mb: 1,
          fontWeight: "bold",
          color: darkMode ? "#ccc" : "#555",
        }}
      >
        Description (English)
      </Typography>
      <EditorContainer>
        <ReactQuill
          value={descriptionEnglish}
          onChange={setDescriptionEnglish}
          modules={modules}
          theme="snow"
          placeholder="Write here..."
        />
      </EditorContainer>

      {/* زر الحفظ */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          borderRadius: "12px",
          padding: "10px 20px",
          background: "linear-gradient(238deg, #E9BA00 -48.58%, #FF2A66 59.6%)",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(238deg, #FF2A66 -48.58%, #E9BA00 59.6%)",
          },
        }}
        onClick={() => {
          console.log("Arabic:", descriptionArabic);
          console.log("English:", descriptionEnglish);
        }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default AboutUsPage;
