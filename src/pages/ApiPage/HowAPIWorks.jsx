import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";

function HowAPIWorks() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

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
        {/* النص */}
        <Grid item xs={12} md={6} sx={{ textAlign: "right" }}> {/* ضبط المحاذاة */}
  <Typography
    variant="h4"
    sx={{
      fontWeight: "700",
      color: "#FF2A66",
      marginBottom: "16px",
      textAlign: "right", // يجعل العنوان يبدأ من أقصى اليمين
    }}
  >
   ؟Okpin API  كيف يعمل 
  </Typography>

  <Typography
  variant="body1"
  sx={{
    fontSize: { xs: "18px", md: "22px" }, // تكبير الخط ليكون أوضح
    lineHeight: "2", // زيادة التباعد بين الأسطر
    maxWidth: "600px",
    textAlign: "right", // محاذاة النص إلى اليمين
    display: "block", // يجعله يأخذ العرض الكامل
    width: "100%", // يضمن التمدد الكامل داخل Grid
    marginLeft: "auto", // يدفع النص بالكامل إلى أقصى اليمين
  }}
>
  استمتع بخطوات بسيطة لاتمام الطلبات بشكل أوتوماتيكي!
  <br />- يطلب العميل منتجًا عبر منصتك.
  <br />- يقوم العميل بكتابة البطاقة الرقمية أو المنتج المطلوب من خلال منصتك.
  <br />- يشتري متجرك المنتج من نظام Okpin.
  <br />- يتم ربط طلب العميل بنظامنا لتوفير المنتج بشكل فوري.
  <br />- يستلم العميل الطلب مباشرة.
  <br />- يوفر نظامنا تسليم المنتج إلى العميل فورًا دون أي تأخير.
  <br />- استمتع بالتحكم دون أي مجهود إضافي.
  <br />- اجعل متجرك يعمل على مدار الساعة دون تدخل يدوي، وركز على تنمية عملك!
</Typography>

</Grid>


        {/* الصورة */}
       
      </Grid>
    </Box>
  );
}

export default HowAPIWorks;
