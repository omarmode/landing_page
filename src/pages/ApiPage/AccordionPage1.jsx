import React, { useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const AccordionPage1 = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const items = [
    { title: "كيف أكسب نقاط المكافآت؟", content: "عند إتمام أي عملية شراء من خلال التطبيق." },
    { title: "هل يمكنني استخدام النقاط في أي وقت؟", content: "نعم، يمكنك استخدام النقاط في أي وقت داخل التطبيق." },
    { title: "هل هناك رسوم إضافية؟", content: "لا، لا توجد أي رسوم إضافية على العمليات." },
    { title: "ما هي مدة صلاحية النقاط؟", content: "النقاط صالحة لمدة عام واحد من تاريخ الكسب." },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "42px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FF2A66",
          marginBottom: "52px",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "34px",
        }}
      >
        (FAQ) الأسئلة الشائعة
      </Typography>

      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
          sx={{
            backgroundColor: isDarkMode ? "#050A17" : "#F5F5F5",
            color: isDarkMode ? "#FFFFFF" : "#333",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
            "&:before": { display: "none" },
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#FF2A66" }}>-</Typography>
              ) : (
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#FF2A66" }}>+</Typography>
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              padding: "10px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              width: "100%",
              gap: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "normal",
                fontSize: "20px",
                textAlign: "right",
                flex: 1,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
                marginRight: "16px",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              padding: "16px 24px",
              fontSize: "16px",
              color: isDarkMode ? "#CCCCCC" : "#555",
              textAlign: "right",
              borderTop: "1px solid #333",
              backgroundColor: isDarkMode ? "#00040F" : "#FFFFFF",
            }}
          >
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionPage1;
