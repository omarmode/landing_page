import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useTheme, Grid } from "@mui/material";

function HowAPIWorks() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // ✅ حالة لتخزين بيانات API
  const [data, setData] = useState({ title: {}, description: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHowItWorks = async () => {
      try {
        const response = await axios.get(`/api-page/how-it-works`);
        setData(response.data);
      } catch (err) {
        setError("فشل تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchHowItWorks();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#00040F" : "#F5F5F5",
        color: isDarkMode ? "#FFFFFF" : "#000000",
        padding: { xs: "40px 20px", md: "80px 60px" },
        textAlign: { xs: "center", md: "right" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* ✅ الصورة */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            src="/Rectangle__1_-removebg-preview.png" // ضع مسار الصورة هنا
            alt="كيف يعمل Okpin API"
            sx={{
              width: { xs: "80%", md: "100%" },
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Grid>

        {/* ✅ النصوص من API */}
        <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
          {/* ✅ العنوان */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "#FF2A66",
              marginBottom: "16px",
              textAlign: "right",
            }}
          >
            {loading ? "جاري التحميل..." : error ? error : data.title.ar}
          </Typography>

          {/* ✅ الوصف */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              lineHeight: "2",
              maxWidth: "600px",
              textAlign: "right",
              display: "block",
              width: "100%",
              marginLeft: "auto",
            }}
          >
            {loading
              ? "جاري تحميل البيانات..."
              : error
              ? "تعذر تحميل الوصف."
              : data.description.ar.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HowAPIWorks;
