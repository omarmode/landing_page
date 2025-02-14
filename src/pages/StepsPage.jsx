import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";

const StepsPage = ({ darkMode }) => {  // ✅ استقبال `darkMode`
  const theme = useTheme();

  const steps = [
    { number: 4, text: "اكسب واستمتع\nاجمع نقاط المكافآت\nواستبدلها بعروض وجوائز." },
    { number: 3, text: "ادفع بأمان\nباستخدام طرق دفع\nسريعة ومشفرة." },
    { number: 2, text: "تصفح المنتجات\nاختر من مجموعة واسعة\nمن البطاقات الرقمية." },
    { number: 1, text: "حمل التطبيق\nاحصل على التطبيق مجاناً\nعلى هاتفك الآن." },
  ];

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#050A17" : theme.palette.background.default,  // ✅ دعم الوضع المظلم
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        position: "relative",
      }}
    >
      {/* العنوان الرئيسي */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* الرقم 1 */}
        <StepCircle step={steps[0]} position="left" darkMode={darkMode} />

        {/* العنوان */}
        <Typography
          variant="h4"
          sx={{
            color: "#FF2A66",
            fontWeight: "bold",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          ابدأ مع Okpin في 4 خطوات سهلة
        </Typography>

        {/* الرقم 4 */}
        <StepCircle step={steps[3]} position="right" darkMode={darkMode} />
      </Box>

      {/* الأرقام (2 و 3) في الأسفل */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "900px",
          position: "relative",
          top: "-500px",
        }}
      >
        {/* الرقم 2 */}
        <StepCircle step={steps[1]} position="right" darkMode={darkMode} />

        {/* الرقم 3 */}
        <StepCircle step={steps[2]} position="left" darkMode={darkMode} />
      </Box>
    </Box>
  );
};

const StepCircle = ({ step, position, darkMode }) => {
  const colors = {
    2: "#00BF16",
    3: "#9022FF",
    4: "#0059FF",
  };

  const borderColor = colors[step.number] || "var(--primary-yellow, #E9BA00)";
  const circleColor = colors[step.number] || "#E9BA00";

  const smallCirclePosition = step.number === 1 || step.number === 4 
    ? { top: "10px", left: position === "left" ? "140px" : "-40px" }
    : { top: "10px", left: position === "left" ? "-40px" : "140px" };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* الخلفية الخاصة بالأرقام (دائرة كبيرة) */}
      <Box
  sx={{
    position: "relative",
    width: "104px",
    height: "104px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    zIndex: 1,

    "@media (max-width: 968px)": {
      position: "relative",
      marginTop: "120px", // ✅ تحريك كل الدوائر للأسفل بالتساوي
      display: "flex",
      flexDirection: "column", // ✅ لمنع تحريك الكروت عند تحريك الدوائر
      alignItems: "center",
    },
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
    <circle cx="52.4717" cy="52.4717" r="51.5283" fill={circleColor} />
  </svg>

  {/* الرقم داخل الدائرة الكبيرة */}
  <Box
    sx={{
      position: "absolute",
      color: "#FFF",
      fontWeight: "bold",
      fontSize: "24px",
      zIndex: 2,

      "@media (max-width: 968px)": {
        marginTop: "20px", // ✅ التأكد من أن الرقم يتحرك مع الدائرة
      },
    }}
  >
    {step.number}
  </Box>
</Box>

 

      {/* الدائرة الصغيرة بجانب الدائرة الكبيرة */}
      <Box
        sx={{
          position: "absolute",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: circleColor,
          ...smallCirclePosition,
        }}
      />

      {/* الكارد */}
      <Box
  sx={{
    display: "flex",
    flexWrap: "wrap", // ✅ السماح بتقسيم الكروت إلى سطرين في الشاشات الصغيرة
    justifyContent: "center", // ✅ توزيع الكروت بشكل متساوٍ
   
    "@media (max-width: 968px)": {
      marginTop: "420px", // ✅ جعل كل الكروت تنزل للأسفل وليس فقط أول كاردين!
    },
  }}
>
  <Paper
    elevation={3}
    sx={{
      background: darkMode ? "#050A17" : "#FFF",
      color: darkMode ? "#FFF" : "#000",
      borderRadius: "24px",
      border: `0.5px solid ${borderColor}`,
      opacity: 0.7,
      backdropFilter: "blur(40px)",
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "1.5",
      width: "263.205px",
      height: "268.613px",
      position: "absolute",
      top: "65px",
      left: position === "left" ? "-179px" : "40px",
      transform: position === "left" ? "rotate(-5deg)" : "rotate(5deg)",
      zIndex: 3,
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "pre-wrap",

      // ✅ **تعديلات خاصة بالشاشات الصغيرة (`sm`) فقط**
      "@media (max-width: 968px)": {
        position: "relative",
        width: "120px",
        height: "120px",
        fontSize: "12px",
        padding: "5px",
        transform: "none",
        left: "unset",
        top: "unset",
      },
    }}
  >
    {step.text}
  </Paper>
</Box>



    </Box>
  );
};

export default StepsPage;