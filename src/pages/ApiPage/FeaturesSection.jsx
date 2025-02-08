import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

function FeaturesSection() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const features = [
    { id: 1, title: "التكامل السريع", image: "/Property 1=1.png" },
    { id: 2, title: "توثيق شامل", image: "/Property 1=2.png" },
    { id: 3, title: "تحديثات الفورية", image: "/Property 1=3.png" },
    { id: 4, title: "دعم متواصل", image: "/Property 1=4.png" },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        backgroundColor: isDarkMode ? "#00040F" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#000000",
      }}
    >
      {/* العنوان */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#FF2A66",
          mb: 3,
        }}
      >
        مميزات واجهة Okpin API
      </Typography>

      {/* البطاقات */}
      <Grid
        container
        justifyContent="center"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px", // ✅ تقليل الفراغ بين الكاردات
        }}
      >
        {features.map((feature) => (
          <Paper
            key={feature.id}
            elevation={3}
            sx={{
              p: 2,
              width: "200px", // ✅ تصغير عرض الكاردات
              borderRadius: "16px",
              textAlign: "center",
              backgroundColor: isDarkMode ? "#13131A" : "#F8F8F8",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={feature.image}
              alt={feature.title}
              sx={{ width: "80px", height: "80px", mb: 1 }} // ✅ تكبير الأيقونة
            />
            <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "600" }}>
              {feature.title}
            </Typography>
          </Paper>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
