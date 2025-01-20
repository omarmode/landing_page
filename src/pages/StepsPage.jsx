import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";

const StepsPage = () => {
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
        backgroundColor: theme.palette.background.default,
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
      {/* الخط المنقط بين الدائرتين الصغيرتين لرقمي 1 و 2 */}
      <svg
  width="20%"
  height="100%"
  style={{ position: "absolute", top: 49, left: 400, zIndex: 8 }}
>
  <line
    x1="100"  // نقطة البداية X للدائرة الصغيرة لرقم 1
    y1="10"  // نقطة البداية Y للدائرة الصغيرة لرقم 1
    x2="250" // نقطة النهاية X للدائرة الصغيرة لرقم 2
    y2="240" // نقطة النهاية Y للدائرة الصغيرة لرقم 2 (زيادة تجعل الميل للأسفل)
    stroke="#FFF"
    strokeWidth="2"
    strokeDasharray="5, 5"
  />
</svg>


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
        <StepCircle step={steps[0]} position="left" />

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
        <StepCircle step={steps[3]} position="right" />
      </Box>

      {/* الأرقام (2 و 3) في الأسفل */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "900px", // تصغير المسافة الكلية بين الحاويتين
          position: "relative",
          top: "-500px", // رفع الحاوية بأكملها للأعلى
        }}
      >
        {/* الرقم 2 */}
        <StepCircle step={steps[1]} position="right" /> {/* عكس اتجاه الكارد لرقم 2 */}

        {/* الرقم 3 */}
        <StepCircle step={steps[2]} position="left" /> {/* عكس اتجاه الكارد لرقم 3 */}
      </Box>
    </Box>
  );
};

const StepCircle = ({ step, position }) => {
  // تحديد الألوان الخاصة بالخطوات
  const colors = {
    2: "#00BF16", // لون الرقم 2
    3: "#9022FF", // لون الرقم 3
    4: "#0059FF", // لون الرقم 4
  };

  const borderColor = colors[step.number] || "var(--primary-yellow, #E9BA00)";
  const circleColor = colors[step.number] || "#E9BA00";

  // تحديد موضع الدائرة الصغيرة بناءً على الرقم
  const smallCirclePosition = step.number === 1 || step.number === 4 
    ? { top: "10px", left: position === "left" ? "140px" : "-40px" } // عكس الاتجاه لرقمي 1 و 4
    : { top: "10px", left: position === "left" ? "-40px" : "140px" }; // الاتجاه العادي لرقمي 2 و 3

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
          zIndex: 1, // جعل الدائرة في الخلف
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
          <circle
            cx="52.4717"
            cy="52.4717"
            r="51.5283"
            fill={circleColor} // تغيير لون الدائرة بناءً على الرقم
          />
        </svg>

        {/* الرقم داخل الدائرة الكبيرة */}
        <Box
          sx={{
            position: "absolute",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: "24px",
            zIndex: 2, // جعل الرقم فوق الدائرة
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
          ...smallCirclePosition, // تطبيق الموضع بناءً على الرقم
        }}
      />

      {/* الكارد */}
      <Paper
        elevation={3}
        sx={{
          background: "var(--primary-bg---card, #050A17)",
          color: "#FFF",
          borderRadius: "24px",
          border: `0.5px solid ${borderColor}`, // تغيير لون البوردر بناءً على الرقم
          opacity: 0.7,
          backdropFilter: "blur(40px)",
          textAlign: "center",
          fontSize: "14px",
          lineHeight: "1.5",
          width: "263.205px",
          height: "268.613px",
          position: "absolute",
          top: "65px", // خفض الكارد قليلاً
          left: position === "left" ? "-179px" : "40px", // عكس الاتجاه بناءً على الموقع
          transform: position === "left" ? "rotate(-5deg)" : "rotate(5deg)", // الميلان بناءً على الموقع
          zIndex: 3, // جعل الكارد فوق الدائرة والرقم
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        {step.text}
      </Paper>
    </Box>
  );
};

export default StepsPage;
