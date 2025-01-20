import React from "react";
// import { Typography, Button } from "@mui/material";
import "./NewPage.css";
import { Button, Typography, Box } from "@mui/material";

function NewPage() {
  return (
    <div className="new-page-container">
      {/* الحاوية الرئيسية */}
      <div className="content-container">
        {/* الصورة على اليسار */}
        <div className="image-container">
          <img
            src="/iMockup - Google Pixel 8 Pro.png" // استبدل هذا الرابط بالصورة الخاصة بك
            alt="Left Illustration"
            className="illustration-image"
          />
        </div>

        {/* النص والأزرار على اليمين */}
        <div className="text-and-buttons-container">
          <Typography variant="h3" gutterBottom className="title">
          ! حمل التطبيق الآن
          </Typography>
          <Typography
  variant="body1"
  className="subtitle"
  sx={{
    color: "var(--nutral-white, #FFF)",
    textAlign: "right",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Tajawal, sans-serif",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "190%", // يعادل 36px
    letterSpacing: "-0.154px",
    alignSelf: "stretch",
    
  }}
>
  لا تفوّت الفرصة! حمل التطبيق الآن واستمتع بعالم من الخصومات والمكافآت التي تجعل كل عملية شراء تجربة ممتعة ومربحة.
</Typography>


          {/* الأزرار */}
          <div className="buttons-container">
            {/* الزر الأول */}
            <Button
      variant="contained"
      
      sx={{
        display: "flex",
        width: "170.509px",
        height: "53.845px",
        padding: "11.218px",
        justifyContent: "center",
        alignItems: "center",
        gap: "11.218px",
        borderRadius: "8.974px",
        background: "#000", // الخلفية السوداء
        textTransform: "none", // منع الأحرف الكبيرة التلقائية
      }}
    >
      {/* SVG على اليسار */}
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4340_12530)">
            <path
              d="M12.4482 13.483L0.694092 25.7978C0.826089 26.2656 1.06329 26.697 1.38757 27.059C1.71185 27.4211 2.11461 27.7042 2.56508 27.8868C3.01555 28.0693 3.50179 28.1464 3.98663 28.1123C4.47147 28.0781 4.94209 27.9335 5.36249 27.6896L18.5881 20.1572L12.4482 13.483Z"
              fill="#EA4335"
            />
            <path
              d="M24.3363 11.3893L18.6171 8.11343L12.1794 13.7627L18.6433 20.1391L24.3189 16.8983C24.8217 16.635 25.2429 16.2392 25.5367 15.7536C25.8306 15.268 25.9859 14.7113 25.9859 14.1438C25.9859 13.5762 25.8306 13.0195 25.5367 12.5339C25.2429 12.0484 24.8217 11.6525 24.3189 11.3892L24.3363 11.3893Z"
              fill="#FBBC04"
            />
            <path
              d="M0.693802 2.42911C0.622797 2.69177 0.58743 2.96279 0.588654 3.23488V24.9914C0.589355 25.2634 0.624689 25.5342 0.693802 25.7973L12.8509 13.7979L0.693802 2.42911Z"
              fill="#4285F4"
            />
            <path
              d="M12.5358 14.1135L18.6144 8.11376L5.40633 0.546237C4.90939 0.255215 4.34419 0.101088 3.7683 0.0995544C2.33917 0.0967769 1.08274 1.0453 0.694092 2.42066L12.5358 14.1135Z"
              fill="#34A853"
            />
          </g>
          <defs>
            <clipPath id="clip0_4340_12530">
              <rect
                width="25.3944"
                height="28.0727"
                fill="white"
                transform="translate(0.588623 0.0995178)"
              />
            </clipPath>
          </defs>
        </svg>
      </Box>

      {/* النصوص على اليمين */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "2px", // مسافة صغيرة بين النصين
        }}
      >
        {/* النص الأول: GET IT ON */}
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            fontSize: "8.974px",
            fontWeight: 400,
            lineHeight: "20.192px",
          }}
        >
          GET IT ON
        </Typography>

        {/* النص الثاني: Google Play */}
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            fontSize: "15.705px",
            fontWeight: 400,
            lineHeight: "26.922px",
          }}
        >
          Google Play
        </Typography>
      </Box>
    </Button>

            {/* الزر الثاني */}
            <Button
      variant="contained"
      
      sx={{
        display: "flex",
        width: "170.509px",
        height: "53.845px",
        padding: "11.218px",
        justifyContent: "center",
        alignItems: "center",
        gap: "11.218px",
        borderRadius: "8.974px",
        background: "#000", // الخلفية السوداء
        textTransform: "none", // منع الأحرف الكبيرة التلقائية
      }}
    >
      {/* SVG على اليسار */}
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="24"
          height="29"
          viewBox="0 0 24 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M19.5376 26.9053C18.026 28.3706 16.3756 28.1392 14.7869 27.4452C13.1057 26.7356 11.5633 26.7048 9.78948 27.4452C7.5684 28.4015 6.39616 28.1238 5.06968 26.9053C-2.45733 19.1469 -1.34679 7.332 7.19822 6.90012C9.28049 7.00809 10.7304 8.04151 11.9489 8.13405C13.7689 7.76387 15.5119 6.6996 17.4553 6.83842C19.7844 7.02351 21.5427 7.94896 22.6995 9.61478C17.8872 12.4991 19.0286 18.8384 23.4399 20.6122C22.5607 22.9259 21.4193 25.2241 19.5222 26.9207L19.5376 26.9053ZM11.7946 6.80757C11.5633 3.36798 14.355 0.529924 17.5633 0.252289C18.0106 4.23173 13.954 7.19318 11.7946 6.80757Z"
            fill="white"
          />
        </svg>
      </Box>

      {/* النصوص على اليمين */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* النص الأول: Download on */}
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            fontSize: "8.974px",
            fontWeight: 400,
            lineHeight: "20.192px",
          }}
        >
          Download on
        </Typography>

        {/* النص الثاني: App Store */}
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins, sans-serif",
            fontSize: "15.705px",
            fontWeight: 400,
            lineHeight: "26.922px",
          }}
        >
          App Store
        </Typography>
      </Box>
    </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
