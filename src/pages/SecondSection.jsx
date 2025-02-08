import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const images = ["/Rectangle.png", "/Rectangle2.png", "/Rectangle3.png"];

function SecondSection() {
  return (
    <Box
      className="second-section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" }, // عكس الاتجاه في الشاشات الكبيرة فقط
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px 80px",
        backgroundColor: "#00040f",
        color: "white",
        textAlign: "right",
      }}
    >
      {/* قسم النصوص */}
      <Box
        className="text-section"
        sx={{
          flex: 1,
          paddingLeft: { md: "40px" },
          paddingBottom: { xs: "30px", md: "0px" },
          order: { xs: 1, md: 0 },
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#ff2a66",
            fontFamily: "Tajawal",
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "180%",
          }}
        >
          مرحباً بك في OKpin!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Tajawal",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "180%",
            marginTop: "20px",
          }}
        >
          مرحباً بك في OKpin، وجهتك المفضلة للتسوق الرقمي! يهدف تطبيق OKpin إلى
          تبسيط عملية شراء المنتجات الرقمية، من بطاقات الألعاب إلى البرامج
          والاشتراكات، بأسعار تنافسية وخصومات مميزة، لتقدم لك كل ما تحتاجه في
          مكان واحد، مع تجربة مستخدم سلسة ومكافآت تجعل كل عملية شراء أكثر متعة.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Tajawal",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "180%",
            marginTop: "10px",
          }}
        >
          مهمتنا مساعدتك في الوصول إلى المنتجات الرقمية التي تحتاجها بأفضل قيمة
          ممكنة مع ضمان تجربة آمنة ومريحة لجميع مستخدمينا.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Tajawal",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "180%",
            marginTop: "10px",
          }}
        >
          رؤيتنا أن نكون الخيار الأول للتسوق الرقمي على مستوى العالم مع تقديم
          قيمة استثنائية وتجربة مستخدم مميزة.
        </Typography>
      </Box>

      {/* قسم الصور بالكامل */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          order: { xs: 2, md: 0 },
          flexWrap: "nowrap", // الحفاظ على ترتيب الصور بجانب بعضها في كل الشاشات
        }}
      >
        {/* الصور الثابتة */}
        <Box
          className="static-column"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "250px",
          }}
        >
          <Box
            component="img"
            src={images[0]}
            alt="large-image"
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <Box
            className="small-images-row"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              src={images[1]}
              alt="small-image-1"
              sx={{
                width: "calc(50% - 5px)",
                height: "150px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              src={images[2]}
              alt="small-image-2"
              sx={{
                width: "calc(50% - 5px)",
                height: "150px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* الصور المتحركة */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          {/* الصف المتحرك الأول */}
          <Box
            className="marquee-container"
            sx={{
              width: "150px",
              height: "460px",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="marquee"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {images.concat(images).map((src, index) => (
                <Box
                  component="img"
                  key={index}
                  src={src}
                  alt={`image-${index + 1}`}
                  sx={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </motion.div>
          </Box>

          {/* الصف المتحرك الثاني */}
          <Box
            className="marquee-container"
            sx={{
              width: "150px",
              height: "460px",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="marquee"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {images.concat(images).map((src, index) => (
                <Box
                  component="img"
                  key={index + 100}
                  src={src}
                  alt={`image-${index + 1}-row2`}
                  sx={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SecondSection;
