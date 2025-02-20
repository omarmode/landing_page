import React from 'react';
import { Typography, Box, Button, useTheme } from '@mui/material';

const FeatureSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode=== 'dark' ? "#170B23" : "#FFFBD3",
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
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          maxWidth: '1000px',
          gap: {xs: '50px', md: '250px'},
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
        <Box sx={{ textAlign: 'right' , flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#FF2A66',
              marginBottom: '16px',
              fontSize:{ xs: '20px', md: '30px' },
              fontFamily: 'Tajawal',
            }}
          >
            أتمتة كاملة لبيع المنتجات الرقمية
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '20px' },
              lineHeight: '1.8',
              marginBottom: '24px',
              direction: 'rtl',
              color: theme.palette.mode === 'dark' ? '#FFF' : '#1A1A1A',
              fontFamily: 'Tajawal',
              fontWeight: 500,
              lineHeight:{ xs: '25px', md: '36px' },
            }}
          >
            اجعل متجرك أكثر كفاءة وسلاسة مع واجهة API الخاصة بـ Okpin.<br/>
            أتمتة كاملة من الطلب إلى التسليم، ودعم فوري لتحديث المخزون والأسعار.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '20px' },
              lineHeight: '1.8',
              marginBottom: '24px',
              direction: 'rtl',
              color: theme.palette.mode === 'dark' ? '#FFF' : '#1A1A1A',
              fontFamily: 'Tajawal',
              fontWeight: 500,
              lineHeight:{ xs: '25px', md: '36px' },
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
              fontSize: {xs: '14px', md: '16px'},
              borderRadius: '24px',
              fontWeight: 700,
              fontFamily: 'Tajawal',
              textTransform: 'none',
              width: '163px',
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
