// pages/Home.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ThirdSection from '../ThirdSection';
import FourdSection from '../FourdSection';
import AccordionPage from '../AccordionPage';
import Footer from '../Footer';
import LogoDark from '../LogoDark';
import ThirdSection1 from './ThirdSection1';
import HowAPIWorks from './HowAPIWorks';
import FeaturesSection from './FeaturesSection';
import FourdSection1 from './FourdSection1';
import AccordionPage1 from './AccordionPage1';

function APiPage({darkMode}) {
  const isDarkMode = darkMode;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '50vh',
          padding: '20px',
          color: isDarkMode ? '#ffffff' : '#000',
          position: 'relative',
          backgroundImage: "url('/Leonardo_Phoenix_10_Design_a_vibrant_and_colorful_banner_for_t_3 (1) 1.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: isDarkMode
              ? 'linear-gradient(180deg, #00040F 2.49%, rgba(0, 4, 15, 0.00) 40.86%, #00040F 84.56%)'
              : 'linear-gradient(180deg, var(--primary-bg, #FFF) 2.49%, rgba(255, 255, 255, 0.00) 40.86%, var(--primary-bg, #FFF) 84.56%)',
            zIndex: 1,
            pointerEvents: 'none',
            transition: 'background 0.3s ease-in-out',
          },
        }}
      >
        {/* لوجو */}
        

        {/* العنوان الرئيسي */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 2,
            fontSize: { xs: '28px', md: '48px' }, // خط كبير
          }}
        >
          تكامل سهل لبيع المنتجات الرقمية
        </Typography>

        {/* الوصف النصي */}
        <Typography
          variant="h5"
          sx={{
            position: 'relative',
            zIndex: 2,
            marginTop: '10px',
            maxWidth: '800px',
            fontSize: { xs: '16px', md: '24px' }, // استجابة للشاشات الصغيرة
          }}
        >
          اجعل عملياتك التجارية أكثر كفاءة من خلال دمج واجهة API الخاصة بـ Okpin في منصتك. استمتع بإدارة أوتوماتيكية كاملة لمنتجاتك الرقمية، من الطلب حتى التسليم. كل هذا بنقرة واحدة!
        </Typography>
      </Box>

      {/* الأقسام الأخرى */}
      <ThirdSection1 />
      <HowAPIWorks/>
      <FeaturesSection/>
      <FourdSection1 />
      <AccordionPage1 />
      <Footer />
    </>
  );
}

export default APiPage;
