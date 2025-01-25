import React, { useState } from 'react';
import { Box, Typography, Grid, Link, IconButton, Button } from '@mui/material';
import Whatsappicon from './icons/Whatsappicon';
import Telegram from './icons/Telegram';
import Twitter from './icons/Twitter';
import Facebook from './icons/Facebook';
import Apple from './icons/Apple';
import Appstore from './icons/Appstore';
import ControlPanelModal from './ControlPanelModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <Box sx={{ backgroundColor: '#00040F', color: 'white', padding: '40px 20px' }}>
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        
        {/* العمود الأول (حمل تطبيق OKpin) */}
        <Grid item xs={12} md={3}>
  <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold', textAlign: 'center' }}>
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
      backgroundColor: '#000000',
      color: '#FFFFFF',
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
      backgroundColor: '#000000',
      color: '#FFFFFF',
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
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
            تواصل معنا
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <Whatsappicon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <Telegram />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <Twitter />
            </IconButton>
          </Box>
        </Grid>

        

        {/* العمود الرابع (سياسات المنصة) */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
            سياسات المنصة
          </Typography>
          <Box>
          <Link
  href="/privacy-policy"
  color="inherit"
  underline="none"
  display="block"
  sx={{ marginBottom: '8px' }}
>
  سياسة الخصوصية
</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' }}>
              شروط الاستخدام
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' }}>
              خدمة API
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              عن OKpin
            </Link>
          </Box>
        </Grid>
           {/* العمود الثالث (روابط الوصول السريع) */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
            روابط الوصول السريع
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' }}>
              الرئيسية
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' }}>
              لماذا نحن
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ marginBottom: '8px' }}>
              الأسئلة الشائعة FAQ
            </Link>
            <Link
        href="#"
        color="inherit"
        underline="none"
        display="block"
        sx={{ marginBottom: '8px' }}
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
        sx={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#bbb' }}
      >
        جميع الحقوق محفوظة © 2024 OKpin
      </Typography>
    </Box>
  );
};

export default Footer;
