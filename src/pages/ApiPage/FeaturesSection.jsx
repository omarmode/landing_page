import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

function FeaturesSection() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // ✅ حالة لتخزين بيانات الميزات القادمة من API
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const featureOrders = [1, 2, 3, 4]; // الأرقام الخاصة بالميزات

    const fetchFeatures = async () => {
      try {
        // ✅ جلب بيانات كل الميزات في وقت واحد
        const responses = await Promise.all(
          featureOrders.map((order) =>
            axios.get(`/api-page/api-advatages/${order}`).then((res) => res.data)
          )
        );

        // ✅ تعيين الصور بناءً على الـ order (لأن API لا يعيد الصور)
        const featuresWithImages = responses.map((feature) => ({
          ...feature,
          image: `/Property 1=${feature.order}.png`, // ربط الصورة مع الرقم
        }));

        setFeatures(featuresWithImages);
      } catch (err) {
        setError("فشل تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

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

      {/* ✅ عرض رسالة تحميل أو خطأ عند الحاجة */}
      {loading && <Typography>جاري تحميل البيانات...</Typography>}
      {error && <Typography sx={{ color: "red" }}>{error}</Typography>}

      {/* ✅ عرض البطاقات بعد تحميل البيانات */}
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
            key={feature._id}
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
            {/* ✅ صورة الميزة */}
            <Box
              component="img"
              src={feature.image}
              alt={feature.title.ar}
              sx={{ width: "80px", height: "80px", mb: 1 }}
            />

            {/* ✅ العنوان */}
            <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "600" }}>
              {feature.title.ar}
            </Typography>
          </Paper>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
