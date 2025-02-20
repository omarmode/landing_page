import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, IconButton } from "@mui/material";
import parse from "html-react-parser"; // مكتبة لتحويل HTML إلى عناصر React
import Facebook from "../../pages/icons/Facebook";
import Twitter from "../../pages/icons/Twitter";
import Whatsappicon from "../../pages/icons/Whatsappicon";
import Telegram from "../../pages/icons/Telegram";
import Logo from "../../pages/icons/Logo";

const AboutUs = ({ theme }) => {
  const [aboutData, setAboutData] = useState(null);
  const containerBackgroundColor = theme === "dark" ? "#00040F" : "#FFFFFF";
  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";

  useEffect(() => {
    axios
      .get("/about-us")
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching about us data:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(./background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "90vh",
          backgroundColor: containerBackgroundColor,
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "right", mb: 3 }}>
          <Logo style={{ width: "120px", height: "120px" }} />
        </Box>

        {/* ✅ العنوان */}
        <Typography
          variant="h3"
          sx={{
            color: "#FF2A66",
            fontWeight: "bold",
            textAlign: "right",
            mb: 3,
          }}
        >
          {aboutData ? aboutData.title.ar : "جارٍ التحميل..."}
        </Typography>

        <Box
          sx={{
            overflowY: "auto",
            padding: "10px",
            color: textColor,
            fontSize: "16px",
            lineHeight: "1.8",
            textAlign: "right",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* ✅ تحويل النص من HTML إلى React مع المحافظة على التنسيق */}
          <Typography>{aboutData ? parse(aboutData.description.ar) : "جارٍ التحميل..."}</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
              mt: 3,
            }}
          >
            <IconButton href="#" sx={{ color: "#FF2A66" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: "#FF2A66" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: "#FF2A66" }}>
              <Whatsappicon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#FF2A66" }}>
              <Telegram />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
