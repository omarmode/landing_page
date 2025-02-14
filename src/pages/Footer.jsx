import React, { useState } from 'react';
import { Box, Typography, Grid, Link, IconButton, Button, useTheme } from '@mui/material';
import Whatsappicon from './icons/Whatsappicon';
import Telegram from './icons/Telegram';
import Twitter from './icons/Twitter';
import Facebook from './icons/Facebook';
import Apple from './icons/Apple';
import Appstore from './icons/Appstore';
import ControlPanelModal from './ControlPanelModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '40px 20px' }}>
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        
        {/* العمود الأول (حمل تطبيق OKpin) */}
        <Grid item xs={6} md={3}      sx={{ 
      order: { xs: 3, md: 1 },
      textAlign: { xs: 'right', md: 'center' }
    }}
    >
  <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 700, textAlign: 'center', direction: 'rtl', fontFamily: 'Tajawal',    fontSize: { xs: '14px', md: '16px' },   textAlign: { xs: 'right', md: 'center' } }}>
    حمل تطبيق OKpin
  </Typography>

  <Box
  sx={{
    display: 'flex',
    gap: '8px', // مسافة صغيرة بين الزرين
    justifyContent: 'center', // محاذاة الزرين في الوسط
    marginTop: '8px', 
  }}
>
  {/* الزر الأول (Google Play) */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#F5F5F5',
      color: theme.palette.text.primary,
      width: '100px', // حجم أصغر
      height: '50px', // تقليل الارتفاع
      textTransform: 'none',
      padding: '6px',
      '&:hover': { backgroundColor: '#333333' },
      display: 'flex',
      flexDirection: 'column', // ترتيب النصوص بشكل عمودي
      borderRadius: '5px',
    }}
    href="#"
  >
    <Typography
      variant="caption"
      sx={{
        fontSize: '8px', // تصغير كلمة "Download on"
        fontWeight: 'bold',
        marginBottom: '2px',
        alignSelf: 'flex-end', // النص العلوي على اليمين
      }}
    >
      Download on
    </Typography>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // توزيع الأيقونة والنص
        width: '100%', // يغطي عرض الزر بالكامل
        gap: '4px',
      }}
    >
      <Appstore /> {/* الأيقونة على اليسار */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 'bold',
          fontSize: '10px',
        }}
      >
        Google Play
      </Typography>
    </Box>
  </Button>

  {/* الزر الثاني (App Store) */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#F5F5F5',
      color: theme.palette.text.primary,
      width: '120px', // حجم أصغر
      height: '50px', // تقليل الارتفاع
      textTransform: 'none',
      padding: '6px',
      '&:hover': { backgroundColor: '#333333' },
      display: 'flex',
      flexDirection: 'column', // ترتيب النصوص بشكل عمودي
      borderRadius: '5px',
    }}
    href="#"
  >
    <Typography
      variant="caption"
      sx={{
        fontSize: '8px', // تصغير كلمة "Download on"
        fontWeight: 'bold',
        marginBottom: '2px',
        alignSelf: 'flex-end', // النص العلوي على اليمين
      }}
    >
      Download on
    </Typography>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // توزيع الأيقونة والنص
        width: '100%', // يغطي عرض الزر بالكامل
        gap: '4px',
      }}
    >
      <Apple sx={{ fontSize: '14px' }} /> {/* الأيقونة على اليسار */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 'bold',
          fontSize: '10px',
        }}
      >
        App Store
      </Typography>
    </Box>
  </Button>
</Box>


</Grid>


        {/* العمود الثاني (تواصل معنا) */}
        <Grid item xs={6} md={3}   sx={{ 
      order: { xs: 4, md: 2 },
      textAlign: { xs: 'right', md: 'right' }
    }}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: '700', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal' }}>
            تواصل معنا
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' , backgroundColor: theme.palette.mode === 'dark' ? '#090F21' : '#F5F5F5' ,borderRadius : '50%'}}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', backgroundColor: theme.palette.mode === 'dark' ? '#090F21' : '#F5F5F5' ,borderRadius : '50%'}}>
              <Whatsappicon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', backgroundColor: theme.palette.mode === 'dark' ? '#090F21' : '#F5F5F5' ,borderRadius : '50%'}}>
              <Telegram />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', backgroundColor: theme.palette.mode === 'dark' ? '#090F21' : '#F5F5F5' ,borderRadius : '50%'}}>
              <Facebook />
            </IconButton>
          </Box>
        </Grid>

        

        {/* العمود الرابع (سياسات المنصة) */}
        <Grid item xs={6} md={3}    sx={{ 
      order: { xs: 1, md: 3 },
      textAlign: { xs: 'right', md: 'right' }
    }}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: '700', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}>
            سياسات المنصة
          </Typography>
          <Box>
          <Link
  href="/privacy-policy"
  color="inherit"
  underline="none"
  display="block"
  sx={{ marginBottom: '8px', fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}
>
  سياسة الخصوصية
</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px', fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}>
              شروط الاستخدام
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px', fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal' }}>
              خدمة API
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px', fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal' }}>
              عن OKpin
            </Link>
          </Box>
        </Grid>
           {/* العمود الثالث (روابط الوصول السريع) */}
        <Grid item xs={6} md={3}    sx={{ 
      order: { xs: 2, md: 4 },
      textAlign: { xs: 'right', md: 'right' }
    }}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: '700', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}>
            روابط الوصول السريع
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px',fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}>
              الرئيسية
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' ,fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}>
              لماذا نحن
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' ,fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal'  }}>
              الأسئلة الشائعة FAQ
            </Link>
            <Link
        href="#"
        color="inherit"
        underline="none"
        display="block"
        sx={{ marginBottom: '8px' ,fontWeight: '400', fontSize:{ xs: '14px', md: '16px' }, fontFamily: 'Tajawal' }}
        onClick={handleOpenModal}
      >
        لوحة التحكم
      </Link>
            <ControlPanelModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        theme="dark" // استخدم "dark" أو "light"
      />
          </Box>
        </Grid>
      </Grid>

      {/* حقوق النشر */}
      <Typography
        variant="body2"
        sx={{ marginTop: '40px', textAlign: 'right', fontSize: '14px', color: '#bbb', direction: 'rtl', marginRight: '100px' }}
      >
        جميع الحقوق محفوظة © 2024 OKpin
      </Typography>
    </Box>
  );
};

export default Footer;
