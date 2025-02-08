import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import IconHero from "../icons/IconHero";
import IconHero2 from "../icons/IconHero2";
import IconHero3 from "../icons/IconHero3";
import IconHero4 from "../icons/IconHero4";

function ThirdSection1() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const cards = [
    {
      id: 4,
      title: "كل المنتجات في مكان واحد",
      text: "نوفر لك بطاقات لأشهر الألعاب، البرامج، والاشتراكات الرقمية.",
      color: "#E9BA00",
      icon: <IconHero style={{ fill: "#FFFFFF" }} />,
    },
    {
      id: 3,
      title: "عروض لا تُقاوم",
      text: "خصومات مذهلة تضمن لك التوفير مع كل عملية شراء.",
      color: "#00BF16",
      icon: <IconHero2 />,
    },
    {
      id: 2,
      title: "نقاط مكافآت مُجزية",
      text: "اجمع النقاط واستبدلها بعروض وجوائز حصرية.",
      color: "#9022FF",
      icon: <IconHero3 />,
    },
    {
      id: 1,
      title: "واجهة بسيطة وفعّالة",
      text: "تصميم يُسهل عليك الوصول لما تبحث عنه بأقل جهد.",
      color: "#0059FF",
      icon: <IconHero4 />,
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "30px", md: "50px 80px" },
        backgroundColor: isDarkMode ? "#00040F" : "#F5F5F5",
        color: isDarkMode ? "white" : "black",
        textAlign: "center",
      }}
    >
      {/* العنوان الرئيسي */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "700",
          color: "#FF2A66",
          marginBottom: "40px",
        }}
      >
        !؟ OKpin لماذا
      </Typography>

      {/* البطاقات */}
      <Grid container spacing={2} justifyContent="center">
        {cards.slice().reverse().map((card, index) => {
          const isTopBackground = index % 2 !== 0; // الخلفية العلوية للكارد الرابع والثاني
          return (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "40px",
                    backgroundColor: isDarkMode ? "#13131A" : "#FFFFFF",
                    textAlign: "center",
                    padding: "20px",
                    height: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden", // لمنع تجاوز الخلفية للحواف
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  {/* الخلفية الملونة */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "25%", // تقليل الارتفاع ليكون أصغر من النصف
                      backgroundColor: card.color,
                      top: isTopBackground ? 0 : "auto",
                      bottom: isTopBackground ? "auto" : 0,
                      borderRadius: isTopBackground
                        ? "40px 40px 0 0"
                        : "0 0 40px 40px",
                    }}
                  />

                  {/* الأيقونة */}
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: card.color,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      position: "absolute",
                      top: isTopBackground ? "0%" : "auto", // تحديد موقع الأيقونة بناءً على الخلفية
                      bottom: isTopBackground ? "auto" : "30%",
                      transform: "translateY(50%)", // لضبط الأيقونة في منتصف الخلفية
                    }}
                  >
                    {card.icon}
                  </Box>

                  {/* المحتوى النصي */}
                  <Box
                    sx={{
                      marginTop: isTopBackground ? "50px" : "-20px", // المسافة لضبط النص
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: isDarkMode ? "#FFFFFF" : "#333",
                        padding: "0 10px",
                      }}
                    >
                      {card.text}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ThirdSection1;
