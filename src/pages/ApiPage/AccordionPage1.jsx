import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const AccordionPage1 = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [faqs, setFaqs] = useState([]); // ✅ تخزين جميع الأسئلة
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        console.log("🔍 جلب جميع الأسئلة المتاحة...");

        let fetchedFAQs = [];
        let order = 1;
        let emptyRequests = 0;
        const maxEmptyRequests = 10; // ⛔ عدد المحاولات الفارغة قبل التوقف

        while (emptyRequests < maxEmptyRequests) {
          try {
            console.log(`🔎 محاولة جلب السؤال ${order}...`);
            const response = await axios.get(`/api-page/faq/${order}`);

            if (response.data.title?.ar && response.data.description?.ar) {
              fetchedFAQs.push(response.data);
              console.log(`✅ تم العثور على السؤال ${order}`);
              emptyRequests = 0; // ✅ تصفير العدّاد عند العثور على بيانات
            } else {
              console.log(`⛔ السؤال ${order} فارغ، سيتم تجاهله.`);
              emptyRequests++; // ⬆️ زيادة عدد المحاولات الفاشلة
            }
          } catch (error) {
            console.log(`⛔ لا يوجد سؤال برقم ${order}، المحاولة (${emptyRequests + 1}/${maxEmptyRequests})`);
            emptyRequests++; // ⬆️ زيادة عدد المحاولات الفاشلة
          }

          order++; // ✅ الانتقال للسؤال التالي
        }

        // ✅ حفظ البيانات بعد الانتهاء
        if (fetchedFAQs.length > 0) {
          setFaqs(fetchedFAQs);
          console.log("📢 جميع الأسئلة بعد البحث:", fetchedFAQs);
        } else {
          setError("❌ لا توجد بيانات متاحة");
        }
      } catch (err) {
        console.error("❌ خطأ أثناء جلب الأسئلة:", err);
        setError("فشل تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

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
      {/* ✅ العنوان الرئيسي */}
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

      {/* ✅ حالة التحميل أو الخطأ */}
      {loading && <Typography>جاري تحميل البيانات...</Typography>}
      {error && <Typography sx={{ color: "red" }}>{error}</Typography>}

      {/* ✅ عرض جميع الأسئلة التي تحتوي على بيانات فقط */}
      {faqs.length > 0 ? (
        faqs.map((faq, index) => (
          <Accordion
            key={faq._id}
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
                {faq.title?.ar || "❌ عنوان غير متوفر"}
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
              {faq.description?.ar || "❌ الوصف غير متوفر"}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        !loading && <Typography>❌ لا توجد بيانات متاحة</Typography>
      )}
    </Box>
  );
};

export default AccordionPage1;
