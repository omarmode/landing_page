import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const FeatureSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#170B23',
        minHeight: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        color: '#FFFFFF',
        gap: '10px',
        
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          maxWidth: '1000px',
          gap: '250px',
          justifyContent: 'space-between',
        
        }}
      >
        {/* الصورة */}
        <Box
          component="img"
          src="/BG-removebg-preview.png" 
          alt="API Illustration"
          sx={{
            width: '300px',
            height: 'auto',

          }}
        />

        {/* النصوص */}
        <Box sx={{ textAlign: { xs: 'center', md: 'right' }, flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#FF2A66',
              marginBottom: '16px',
            }}
          >
            أتمتة كاملة لبيع المنتجات الرقمية
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '24px',
            }}
          >
            اجعل متجرك أكثر كفاءة وسلاسة مع واجهة API الخاصة بـ Okpin.<br/>
            أتمتة كاملة من الطلب إلى التسليم، ودعم فوري لتحديث المخزون والأسعار.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '24px',
            }}
          >
            <strong>المميزات:</strong> <br />
            تكامل سلس: ربط سريع مع متجرك الإلكتروني. <br />
            تنوع المنتجات: بطاقات الألعاب، البرامج، والاشتراكات الرقمية. <br />
            إدارة ذكية: تحديث فوري للمخزون والأسعار.
          </Typography>
          {/* الزر */}
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #E9BA00, #FF2A66)',
              color: '#FFFFFF',
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            اكتشف المزيد
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureSection;
