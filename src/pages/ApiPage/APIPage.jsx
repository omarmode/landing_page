// pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import ThirdSection1 from './ThirdSection1';
import HowAPIWorks from './HowAPIWorks';
import FeaturesSection from './FeaturesSection';
import FourdSection1 from './FourdSection1';
import AccordionPage1 from './AccordionPage1';
import Footer from '../Footer';

function APiPage({ darkMode }) {
  const isDarkMode = darkMode;

  // تخزين بيانات API
  const [heroData, setHeroData] = useState({ title: {}, description: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get('/api-page/hero'); // استخدام proxy
        setHeroData(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('فشل تحميل البيانات');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>{error}</p>;

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
        {/* العنوان الرئيسي (محمل من API) */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 2,
            fontSize: { xs: '28px', md: '48px' },
          }}
        >
          {heroData.title?.ar || 'جاري تحميل العنوان...'}
        </Typography>

        {/* الوصف النصي (محمل من API) */}
        <Typography
          variant="h5"
          sx={{
            position: 'relative',
            zIndex: 2,
            marginTop: '10px',
            maxWidth: '800px',
            fontSize: { xs: '16px', md: '24px' },
          }}
        >
          {heroData.description?.ar || 'جاري تحميل الوصف...'}
        </Typography>
      </Box>

      {/* الأقسام الأخرى */}
      <ThirdSection1 />
      <HowAPIWorks />
      <FeaturesSection />
      <FourdSection1 />
      <AccordionPage1 />
      <Footer />
    </>
  );
}

export default APiPage;
