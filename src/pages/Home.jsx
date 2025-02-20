import React from "react";
import {
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourdSection from "./FourdSection";
import StepsPage from "./StepsPage";
import NewPage from "./NewPage";
import StyledPage from "./StyledPage";
import AccordionPage from "./AccordionPage";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import { axiosInstance } from "../axios/axios";
import { useQuery } from "@tanstack/react-query";
import StepsPageMobile from "./StepsPageMobile";
function Home({ darkMode, language }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  function getAllDateHomePage() {
    return axiosInstance.get(`/translate/landing?lang=${language}`);
  }
  const { data,isLoading } = useQuery({
    queryKey: ["getAllDateHomePage", language],
    queryFn: getAllDateHomePage,
  });

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 1201 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        className="home-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
         
          height: isMobile ? "auto" : "100vh",
          padding: "20px",
          paddingTop: isMobile ? "100px" : "60px",
          color: "#ffffff",
          position: "relative",
          backgroundSize: "cover",
          backgroundColor: darkMode
            ? theme.palette.background.default
            : theme.palette.background.paper,
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url('/Leonardo_Phoenix_10_Design_a_vibrant_and_colorful_banner_for_t_3 (1) 1.png')"
              : `linear-gradient(180deg, #ffffff 2.49%, rgba(255, 255, 255, 0.00) 50.86%, #ffffff 84.56%), url('/lightModeCover.png')`,
        }}
      >
        <Box
          className="logo-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isDarkMode ? (
            <svg
              width="72"
              height="26"
              viewBox="0 0 72 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 633337 2" clipPath="url(#clip0_4383_3743)">
                <path
                  id="Vector"
                  d="M45.9682 0.353523C46.1288 0.400739 46.2884 0.449856 46.448 0.500332C46.0903 0.933707 45.6975 1.32867 45.3002 1.72513C45.225 1.80041 45.1498 1.87571 45.0746 1.95103C44.8688 2.15711 44.6628 2.36299 44.4567 2.56883C44.2342 2.79118 44.0119 3.01373 43.7896 3.23625C43.3543 3.67184 42.9188 4.10724 42.4833 4.54258C42.1292 4.89647 41.7752 5.25043 41.4213 5.60444C41.3709 5.65486 41.3205 5.70527 41.2686 5.75721C41.1662 5.85963 41.0638 5.96205 40.9614 6.06447C40.0015 7.02459 39.0413 7.98451 38.0811 8.94435C37.2576 9.76753 36.4343 10.5909 35.6111 11.4144C34.6548 12.3711 33.6983 13.3277 32.7417 14.2841C32.6397 14.3861 32.5376 14.4882 32.4355 14.5902C32.3853 14.6404 32.3351 14.6906 32.2834 14.7423C31.9299 15.0957 31.5766 15.4492 31.2232 15.8027C30.7924 16.2337 30.3615 16.6645 29.9305 17.0952C29.7106 17.3149 29.4908 17.5346 29.2712 17.7545C29.07 17.9559 28.8685 18.1572 28.667 18.3584C28.5943 18.431 28.5217 18.5037 28.4491 18.5764C28.0976 18.9286 27.7444 19.2754 27.3654 19.5982C27.2001 19.7408 27.0476 19.8946 26.8947 20.0502C26.8629 20.0824 26.8312 20.1145 26.7985 20.1477C26.7306 20.2165 26.6628 20.2854 26.595 20.3544C26.4868 20.4645 26.3782 20.5743 26.2695 20.684C25.9609 20.9955 25.6524 21.3072 25.3451 21.62C23.6816 23.3126 23.6816 23.3126 22.8141 23.861C22.7597 23.8961 22.7053 23.9311 22.6493 23.9673C22.5224 24.0458 22.3948 24.1191 22.2634 24.1897C22.2181 24.2144 22.1729 24.2392 22.1263 24.2646C21.2558 24.7324 20.3529 25.0474 19.3988 25.2954C19.3514 25.3079 19.3039 25.3203 19.255 25.3331C17.829 25.6863 16.0377 25.6519 14.6174 25.2954C14.5701 25.2837 14.5228 25.272 14.4741 25.2599C12.3919 24.7313 10.699 23.6607 9.203 22.1329C9.08867 22.0207 8.97046 21.9176 8.84818 21.8142C8.49571 21.5074 8.1682 21.1763 7.83926 20.8448C7.72446 20.7292 7.60944 20.6137 7.49437 20.4983C7.20881 20.2118 6.92362 19.925 6.63842 19.6382C6.39661 19.395 6.15466 19.152 5.91252 18.9091C5.80009 18.7963 5.68787 18.6832 5.57566 18.5701C5.16226 18.1535 5.16226 18.1535 4.72633 17.7608C4.26405 17.3652 3.84426 16.9213 3.41518 16.4906C3.31643 16.3917 3.21767 16.2929 3.1189 16.194C2.86047 15.9353 2.60226 15.6765 2.34409 15.4175C2.08 15.1527 1.81571 14.8881 1.55144 14.6235C1.03406 14.1054 0.5169 13.5871 -0.00012207 13.0686C0.0965176 12.8493 0.212363 12.7026 0.381598 12.5337C0.43179 12.4833 0.481985 12.4329 0.533698 12.381C0.588055 12.3271 0.64241 12.2732 0.698414 12.2177C0.754537 12.1617 0.810663 12.1056 0.868487 12.0478C0.987414 11.9291 1.10651 11.8105 1.22576 11.6921C1.40693 11.5122 1.58755 11.3317 1.7681 11.1511C1.88395 11.0356 1.99984 10.9201 2.11576 10.8047C2.16929 10.7512 2.22282 10.6978 2.27797 10.6427C3.05977 9.86751 3.05977 9.86751 3.48348 9.58503C3.53606 9.6377 3.53607 9.6377 3.5897 9.69144C4.44417 10.5474 5.29883 11.4032 6.15369 12.2588C6.5671 12.6725 6.98044 13.0864 7.39364 13.5003C7.75394 13.8613 8.11438 14.2222 8.47495 14.5829C8.66571 14.7738 8.85641 14.9647 9.04697 15.1557C9.22668 15.3359 9.40654 15.5159 9.58653 15.6958C9.68334 15.7926 9.77997 15.8896 9.87659 15.9866C10.1785 16.2881 10.4835 16.5806 10.8087 16.857C11.0336 17.0537 11.2401 17.2691 11.4489 17.4826C11.5464 17.5813 11.6439 17.68 11.7414 17.7787C11.8923 17.9316 12.0429 18.0847 12.1932 18.2382C12.8887 18.9475 13.56 19.6124 14.4637 20.0529C14.5094 20.0755 14.5552 20.098 14.6023 20.1213C15.2471 20.427 15.9517 20.6198 16.6665 20.6506C16.7178 20.6533 16.769 20.6561 16.8218 20.6589C18.4044 20.7024 19.7962 20.1052 20.9698 19.0796C21.228 18.8275 21.4738 18.5648 21.7191 18.3003C21.7914 18.2231 21.8638 18.1459 21.9362 18.0688C22.0924 17.9023 22.2484 17.7356 22.4041 17.5687C22.8383 17.1036 23.2745 16.6404 23.7107 16.1772C23.7569 16.1281 23.8032 16.079 23.8508 16.0284C24.5831 15.2505 25.3205 14.4777 26.0617 13.7083C26.1122 13.656 26.1626 13.6036 26.2145 13.5497C26.7361 13.0083 27.2583 12.4676 27.7811 11.9274C28.0494 11.6502 28.3175 11.3728 28.5854 11.0953C28.6388 11.0401 28.6921 10.9849 28.7471 10.928C29.4979 10.1499 30.24 9.36439 30.976 8.57234C32.2428 7.20908 33.5246 5.86202 34.8376 4.54293C34.888 4.49221 34.9384 4.44149 34.9903 4.38923C38.2944 1.07012 41.07 -1.02466 45.9682 0.353523Z"
                  fill="white"
                />
                <path
                  id="Vector_2"
                  d="M19.4667 0.704534C19.5203 0.718105 19.5738 0.731676 19.629 0.745658C21.3968 1.20534 23.1409 2.04066 24.4071 3.38873C24.5197 3.50335 24.6366 3.60613 24.7593 3.7098C25.1392 4.04004 25.4913 4.39821 25.8461 4.75487C25.9199 4.82875 25.9936 4.90261 26.0674 4.97647C26.2601 5.16938 26.4525 5.36249 26.6449 5.55565C26.8411 5.75249 27.0374 5.94914 27.2337 6.1458C27.5782 6.49096 27.9226 6.83628 28.2668 7.18173C28.3843 7.29964 28.5019 7.41746 28.6197 7.53514C28.5684 7.58607 28.5171 7.63701 28.4643 7.68949C28.2717 7.88078 28.0794 8.0723 27.8872 8.26389C27.8044 8.34635 27.7215 8.42876 27.6386 8.5111C27.0401 9.10522 27.0401 9.10522 26.4761 9.73173C26.2592 9.97875 26.023 10.2072 25.7893 10.4381C25.7393 10.4878 25.6893 10.5375 25.6379 10.5886C25.5163 10.7094 25.3946 10.83 25.2727 10.9504C25.0782 10.8621 24.9387 10.7697 24.789 10.6178C24.7498 10.5783 24.7106 10.5388 24.6701 10.4982C24.6284 10.4556 24.5867 10.4129 24.5438 10.369C24.4781 10.3028 24.4781 10.3028 24.411 10.2352C24.271 10.094 24.1315 9.95232 23.992 9.81058C23.8534 9.67011 23.7147 9.52975 23.5759 9.38959C23.4896 9.3025 23.4035 9.21523 23.3176 9.12774C23.065 8.87231 22.8028 8.63339 22.531 8.39862C22.3582 8.2462 22.198 8.08354 22.0381 7.91776C21.9723 7.85049 21.9065 7.78325 21.8407 7.71604C21.7405 7.61328 21.6405 7.51033 21.541 7.4068C20.4391 6.26209 19.0447 5.41943 17.4175 5.34934C17.3663 5.34661 17.315 5.34388 17.2622 5.34107C15.6436 5.29655 14.1799 5.92989 13.0078 7.01936C12.7225 7.29327 12.4444 7.57449 12.166 7.85532C12.0766 7.94492 11.9872 8.0345 11.8978 8.12404C11.6646 8.35775 11.4319 8.59187 11.1992 8.82608C10.9608 9.06583 10.7221 9.30518 10.4834 9.54456C10.0166 10.0128 9.55026 10.4815 9.08419 10.9504C8.83427 10.8453 8.67552 10.6949 8.48525 10.5036C8.4539 10.4723 8.42254 10.4409 8.39024 10.4087C8.28717 10.3055 8.18459 10.2019 8.08202 10.0982C8.01046 10.0264 7.93887 9.95462 7.86725 9.88286C7.6792 9.69429 7.49156 9.5053 7.304 9.31623C7.11239 9.12323 6.9204 8.93061 6.72844 8.73796C6.3521 8.36017 5.97621 7.98194 5.60059 7.60344C5.86513 7.28763 6.13892 6.98618 6.42945 6.69418C6.46917 6.65402 6.50889 6.61385 6.54981 6.57246C6.67995 6.44098 6.81036 6.30977 6.94082 6.17862C6.98589 6.13327 7.03096 6.08793 7.07739 6.04121C7.3162 5.80098 7.55523 5.56097 7.79443 5.32113C8.03887 5.07593 8.28251 4.82995 8.52596 4.58378C8.71556 4.39238 8.90578 4.2016 9.09616 4.01098C9.18611 3.92071 9.27583 3.8302 9.36529 3.73945C10.1227 2.97184 10.9286 2.28789 11.8847 1.77609C11.9361 1.7482 11.9874 1.72032 12.0403 1.69159C12.8783 1.24529 13.7662 0.93589 14.6853 0.704534C14.7294 0.693154 14.7736 0.681773 14.819 0.670048C16.2441 0.32082 18.048 0.335094 19.4667 0.704534Z"
                  fill="white"
                />
                <path
                  id="Vector_3"
                  d="M58.3295 3.28867C59.4309 4.3888 59.8208 5.70747 59.8377 7.23903C59.8234 8.69977 59.2966 9.98248 58.2651 11.0196C58.2298 11.0573 58.1945 11.0949 58.1581 11.1338C57.2275 12.0377 55.7811 12.3161 54.5339 12.3204C53.0592 12.2934 51.7814 11.8092 50.7429 10.7463C50.0003 9.87003 49.6338 8.6712 49.5902 7.53596C49.5861 7.44945 49.5861 7.44945 49.582 7.3612C49.5458 5.89451 50.0002 4.52331 51.0069 3.44874C51.8604 2.57588 53.0785 2.07771 54.2948 2.00531C55.7822 1.99044 57.2118 2.21607 58.3295 3.28867ZM52.8689 4.73542C52.169 5.63554 52.1852 6.7899 52.2542 7.87749C52.352 8.65079 52.6573 9.41948 53.2838 9.90987C53.8911 10.3028 54.5401 10.4314 55.2516 10.3002C55.9251 10.1314 56.3525 9.80142 56.7624 9.24362C57.108 8.60418 57.1981 7.89042 57.1935 7.17309C57.1932 7.11059 57.1929 7.04809 57.1925 6.9837C57.1776 6.11878 57.0059 5.25937 56.3995 4.60734C55.8723 4.12237 55.2132 3.94633 54.5083 3.96297C53.8553 4.03014 53.3016 4.23185 52.8689 4.73542Z"
                  fill="#FF2A66"
                />
                <path
                  id="Vector_4"
                  d="M35.9289 14.9124C36.1185 14.999 36.2584 15.0881 36.4055 15.2355C36.4437 15.2734 36.4819 15.3113 36.5212 15.3503C36.5623 15.3918 36.6034 15.4332 36.6457 15.4759C36.6896 15.5197 36.7335 15.5635 36.7787 15.6086C36.9239 15.7535 37.0685 15.8988 37.2131 16.0442C37.3142 16.1453 37.4152 16.2464 37.5163 16.3475C37.7283 16.5596 37.9401 16.772 38.1518 16.9845C38.422 17.2559 38.6926 17.5268 38.9634 17.7976C39.1723 18.0065 39.3811 18.2156 39.5898 18.4248C39.6894 18.5247 39.7891 18.6245 39.8889 18.7243C40.029 18.8645 40.1688 19.005 40.3086 19.1455C40.3492 19.1861 40.3899 19.2267 40.4317 19.2686C40.68 19.5187 40.9139 19.7779 41.1445 20.0444C41.2955 20.216 41.4549 20.3777 41.617 20.5388C41.6496 20.5713 41.6822 20.6038 41.7158 20.6373C41.7855 20.7068 41.8553 20.7762 41.9252 20.8455C42.0363 20.9557 42.1472 21.0661 42.258 21.1766C42.4933 21.4111 42.7288 21.6454 42.9644 21.8796C43.2378 22.1513 43.5111 22.4232 43.7841 22.6954C43.8924 22.8033 44.0009 22.9109 44.1095 23.0186C44.436 23.3435 44.7556 23.6707 45.0538 24.022C45.2011 24.1925 45.3604 24.3478 45.5216 24.5051C45.6268 24.6077 45.7311 24.7112 45.8333 24.8167C45.8333 24.8393 45.8333 24.8618 45.8333 24.885C40.2149 25.797 40.2149 25.797 38.2355 24.3709C37.4197 23.7456 36.7042 23.0143 36.0143 22.2552C35.9573 22.1927 35.9004 22.1301 35.8417 22.0656C35.1865 21.3402 34.56 20.5946 33.9574 19.8251C33.6266 19.4059 33.2737 19.0099 32.8936 18.635C32.8345 18.5766 32.7754 18.5181 32.7145 18.4579C32.6708 18.4149 32.627 18.3719 32.5819 18.3277C32.9236 17.9149 33.2945 17.538 33.6743 17.1603C33.7396 17.0952 33.8048 17.03 33.8701 16.9648C34.0404 16.7948 34.2109 16.6249 34.3814 16.4551C34.556 16.2812 34.7304 16.1071 34.9048 15.9331C35.246 15.5926 35.5874 15.2524 35.9289 14.9124Z"
                  fill="#FF2A66"
                />
                <path
                  id="Vector_5"
                  d="M61.6123 2.20768C62.4463 2.20768 63.2803 2.20768 64.1396 2.20768C64.1622 3.56014 64.1847 4.91259 64.2079 6.30604C64.7326 5.72965 64.7326 5.72965 65.2483 5.14617C65.4904 4.86979 65.7377 4.59792 65.9839 4.32516C66.0864 4.21134 66.1888 4.09749 66.2913 3.98363C66.906 3.30057 66.906 3.30057 67.0576 3.13221C67.1672 3.0104 67.2768 2.88854 67.3863 2.76667C67.4419 2.70477 67.4976 2.64287 67.5549 2.57909C67.6056 2.52265 67.6564 2.46621 67.7086 2.40806C67.8896 2.20814 67.8896 2.20814 68.0188 2.19946C68.072 2.19961 68.1253 2.19977 68.1801 2.19992C68.2403 2.19993 68.3004 2.19993 68.3624 2.19994C68.4278 2.20029 68.4932 2.20064 68.5606 2.20101C68.6605 2.20115 68.6605 2.20115 68.7624 2.2013C68.9761 2.20168 69.1898 2.20254 69.4035 2.20341C69.5479 2.20375 69.6924 2.20406 69.8369 2.20434C70.1919 2.2051 70.5469 2.20624 70.9019 2.20768C70.8373 2.28375 70.7726 2.35974 70.7078 2.43569C70.6718 2.47802 70.6357 2.52034 70.5986 2.56395C70.4079 2.7822 70.1982 2.98081 69.9907 3.18291C69.8518 3.32511 69.7224 3.46795 69.5933 3.61864C69.3329 3.91726 69.0573 4.19768 68.7762 4.47672C68.7253 4.52749 68.6744 4.57827 68.622 4.63058C68.4614 4.79078 68.3006 4.95073 68.1398 5.11068C68.0301 5.22006 67.9204 5.32946 67.8107 5.43887C67.5435 5.70534 67.276 5.97161 67.0085 6.23773C67.0888 6.45221 67.1731 6.63728 67.3065 6.8234C67.3385 6.86835 67.3704 6.91329 67.4034 6.9596C67.4379 7.00737 67.4724 7.05514 67.508 7.10436C67.5623 7.18045 67.5623 7.18045 67.6178 7.25807C67.733 7.41915 67.8488 7.57984 67.9648 7.74046C68.0382 7.84257 68.1117 7.94467 68.1852 8.04677C68.3699 8.3032 68.5552 8.55925 68.7406 8.81518C68.9263 9.07151 69.1115 9.32813 69.2967 9.58473C69.3701 9.6863 69.4435 9.78787 69.5169 9.88943C69.6712 10.1031 69.8254 10.317 69.9795 10.5309C70.0189 10.5855 70.0582 10.6401 70.0988 10.6963C70.1733 10.7996 70.2477 10.903 70.3221 11.0063C70.3563 11.0537 70.3904 11.1011 70.4256 11.1499C70.4587 11.1958 70.4918 11.2417 70.5259 11.289C70.6683 11.4829 70.8155 11.673 70.9634 11.8627C71.0385 11.9754 71.0385 11.9754 71.0385 12.112C70.6133 12.1375 70.1886 12.156 69.7628 12.1683C69.6183 12.1735 69.4739 12.1804 69.3296 12.1893C68.165 12.2594 68.165 12.2594 67.8355 12.0169C67.6156 11.7776 67.4729 11.5044 67.3392 11.2102C67.2673 11.0567 67.1769 10.9235 67.0771 10.7868C67.0492 10.7464 67.0214 10.706 66.9927 10.6644C66.9655 10.6251 66.9383 10.5858 66.9103 10.5453C66.8472 10.4539 66.7842 10.3624 66.7211 10.271C66.6897 10.2255 66.6583 10.18 66.626 10.1332C66.4975 9.94693 66.3694 9.76042 66.2413 9.5739C65.8835 9.05296 65.5244 8.533 65.1642 8.01369C64.7669 8.19759 64.4035 8.42795 64.2079 8.83336C64.0837 9.38084 64.1217 9.95782 64.1311 10.5154C64.1312 10.6702 64.131 10.8251 64.1306 10.9799C64.1295 11.3575 64.1347 11.7343 64.1396 12.112C63.3056 12.112 62.4716 12.112 61.6123 12.112C61.6123 8.84361 61.6123 5.57516 61.6123 2.20768Z"
                  fill="#FF2A66"
                />
                <path
                  id="Vector_6"
                  d="M62.9785 14.7754C63.9027 14.7754 64.8269 14.7754 65.7791 14.7754C66.5262 16.0783 67.2662 17.3849 67.9862 18.703C68.0316 18.786 68.0316 18.786 68.0779 18.8707C68.3868 19.4383 68.687 20.0101 68.9894 20.5814C68.9894 18.6654 68.9894 16.7494 68.9894 14.7754C69.6657 14.7754 70.3419 14.7754 71.0386 14.7754C71.0386 17.6832 71.0386 20.591 71.0386 23.5869C70.1595 23.5869 69.2804 23.5869 68.3747 23.5869C68.2338 23.3248 68.0929 23.0628 67.9478 22.7928C67.6364 22.2141 67.3238 21.6361 67.0086 21.0595C66.7073 20.5079 66.4068 19.9559 66.1078 19.4031C66.0705 19.3345 66.0332 19.2659 65.9948 19.1953C65.6576 18.5707 65.3457 17.9387 65.0277 17.3027C65.0277 19.3765 65.0277 21.4503 65.0277 23.5869C64.3515 23.5869 63.6752 23.5869 62.9785 23.5869C62.9785 20.6791 62.9785 17.7713 62.9785 14.7754Z"
                  fill="white"
                />
                <path
                  id="Vector_7"
                  d="M49.9316 14.7757C50.6924 14.7715 51.4532 14.7673 52.237 14.7629C52.4756 14.7611 52.7142 14.7592 52.96 14.7573C53.2555 14.7563 53.2555 14.7563 53.3946 14.7562C53.49 14.7559 53.5854 14.7551 53.6808 14.7541C54.7382 14.743 55.5192 14.9416 56.4079 15.5143C56.9728 16.0792 57.2468 16.7637 57.2575 17.5549C57.2494 18.328 57.0244 19.008 56.4783 19.5729C55.2698 20.6186 53.6761 20.4593 52.1857 20.4451C52.1857 21.482 52.1857 22.5189 52.1857 23.5872C51.4419 23.5872 50.698 23.5872 49.9316 23.5872C49.9316 20.6794 49.9316 17.7716 49.9316 14.7757ZM52.1857 16.4834C52.1857 17.2047 52.1857 17.926 52.1857 18.6692C52.49 18.6748 52.7943 18.6804 53.1079 18.6863C53.2027 18.6887 53.2976 18.6912 53.3954 18.6938C53.9388 18.6986 54.3398 18.6728 54.7577 18.2935C54.9497 18.0796 54.9698 17.7859 54.9863 17.508C54.9387 17.1855 54.8472 16.9608 54.6191 16.7267C54.286 16.5284 54.0357 16.4665 53.6466 16.47C53.5314 16.4706 53.5314 16.4706 53.4138 16.4711C53.3171 16.4723 53.2203 16.4736 53.1207 16.4748C52.6579 16.4791 52.6579 16.4791 52.1857 16.4834Z"
                  fill="white"
                />
                <path
                  id="Vector_8"
                  d="M58.6066 14.7754C59.373 14.7754 60.1394 14.7754 60.929 14.7754C60.929 17.6832 60.929 20.591 60.929 23.5869C60.1626 23.5869 59.3962 23.5869 58.6066 23.5869C58.6066 20.6791 58.6066 17.7713 58.6066 14.7754Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4383_3743">
                  <rect
                    width="71.0383"
                    height="25"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <img
              src="/svgLight.png"
              alt="Light Mode Logo"
              width="72"
              height="26"
            />
          )}
        </Box>

        <Typography
          variant="h3"
          gutterBottom
          className="title"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "24px" : "48px",
            textAlign: "center",
            maxWidth: isMobile ? "60%" : "70%",

            lineHeight: isMobile ? "43.2px" : "86.4px",
            // lineHeight: isMobile ? "43.2px" : "86.4px",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            color: theme.palette.mode === "dark" ? "white" : "black",
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 700,
          }}
        >
          {data?.data?.header?.title[language]}
        </Typography>
        <Typography
          variant="body1"
          className="subtitle"
          sx={{
            textAlign: "center",
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 500,
            fontSize: isMobile ? "14px" : "24px",
            textAlign: "center",
            maxWidth: isMobile ? "75%" : "70%",
            margin: "0 auto",
            marginBottom: isMobile ? "0.5rem" : "1.5rem",
            lineHeight: isMobile ? "25.2px" : "43.2px",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            color:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(0, 0, 0, 0.7)",
          }}
        >
          {data?.data?.header?.description[language]}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className="start-button"
          sx={{
            marginTop: "20px",
            display: "flex",
            height: "56px",
            width: "auto",
            padding: "10px 40px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "24px",
            background:
              "linear-gradient(67deg, #E9BA00 -24.26%, #FF2A66 41.56%)",
            color: "#ffffff", // لون النص
            fontSize: "16px",
            textTransform: "none",
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 500,
            "&:hover": {
              background: "linear-gradient(67deg, #E9BA00 -10%, #FF2A66 50%)",
              fontFamily: "Tajawal, sans-serif",
              fontWeight: 500,
            },
          }}
        >
          {language === "ar" ?"!ابدأ الآن معنا" :"Start Now Us"}
        </Button>
        <div className="svg-divider">
          {[...Array(10)].map((_, index) => (
            <svg
              key={index}
              width="110"
              height="59"
              viewBox="0 0 110 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Group 633337 13"
                opacity="0.02"
                clipPath="url(#clip0_4340_12292)"
              >
                <path
                  id="Vector"
                  d="M108.085 -0.514779C108.462 -0.40435 108.837 -0.289472 109.212 -0.171415C108.372 0.842188 107.449 1.76596 106.516 2.69321C106.339 2.86929 106.162 3.0454 105.986 3.22155C105.502 3.70356 105.018 4.18508 104.534 4.66651C104.011 5.18656 103.489 5.70707 102.967 6.22752C101.944 7.24629 100.921 8.26464 99.898 9.28283C99.0662 10.1105 98.2346 10.9384 97.4031 11.7664C97.2847 11.8843 97.1663 12.0022 97.0443 12.1237C96.8038 12.3632 96.5632 12.6028 96.3227 12.8423C94.0675 15.0879 91.8119 17.333 89.5562 19.5779C87.6216 21.5032 85.6874 23.429 83.7536 25.355C81.5069 27.5926 79.2599 29.8299 77.0126 32.0668C76.7728 32.3055 76.5331 32.5441 76.2933 32.7828C76.1753 32.9002 76.0574 33.0176 75.9358 33.1386C75.1055 33.9651 74.2754 34.7918 73.4453 35.6186C72.4332 36.6266 71.4209 37.6343 70.4082 38.6417C69.8918 39.1554 69.3755 39.6693 68.8595 40.1835C68.3867 40.6547 67.9135 41.1255 67.44 41.5961C67.2693 41.7659 67.0987 41.9358 66.9282 42.1059C66.1025 42.9297 65.2727 43.7407 64.3822 44.4958C63.994 44.8293 63.6357 45.189 63.2765 45.5529C63.2019 45.6282 63.1273 45.7034 63.0505 45.781C62.8909 45.9419 62.7316 46.1031 62.5725 46.2644C62.3182 46.5219 62.0631 46.7787 61.8078 47.0352C61.0827 47.7638 60.3581 48.4928 59.6361 49.2245C55.7281 53.1833 55.7281 53.1833 53.6901 54.4658C53.5623 54.5479 53.4346 54.6299 53.3029 54.7144C53.0049 54.8982 52.705 55.0695 52.3963 55.2347C52.29 55.2925 52.1838 55.3503 52.0743 55.4099C50.0293 56.504 47.9082 57.2408 45.6667 57.8207C45.5552 57.8499 45.4438 57.879 45.329 57.909C41.9788 58.735 37.7707 58.6546 34.4339 57.8207C34.3228 57.7933 34.2118 57.7659 34.0973 57.7377C29.2058 56.5014 25.2287 53.9975 21.7142 50.4242C21.4456 50.1618 21.1679 49.9205 20.8806 49.6787C20.0526 48.961 19.2832 48.1868 18.5104 47.4115C18.2407 47.1409 17.9705 46.8709 17.7002 46.601C17.0293 45.931 16.3594 45.2601 15.6894 44.5892C15.1213 44.0205 14.5529 43.4521 13.984 42.8842C13.7199 42.6202 13.4563 42.3557 13.1927 42.0912C12.2215 41.1168 12.2215 41.1168 11.1974 40.1983C10.1114 39.2732 9.12518 38.235 8.11715 37.2276C7.88517 36.9963 7.65316 36.7651 7.42111 36.5339C6.81401 35.9289 6.2074 35.3234 5.60089 34.7178C4.98048 34.0985 4.35959 33.4796 3.73876 32.8607C2.52331 31.649 1.30837 30.4367 0.09375 29.2241C0.320781 28.7111 0.592931 28.3679 0.990506 27.9729C1.10842 27.8551 1.22634 27.7372 1.34783 27.6157C1.47553 27.4897 1.60322 27.3638 1.73479 27.2339C1.86663 27.1028 1.99849 26.9716 2.13433 26.8364C2.41372 26.5587 2.69351 26.2814 2.97364 26.0045C3.39926 25.5837 3.8236 25.1616 4.24774 24.7393C4.51992 24.4691 4.79217 24.199 5.0645 23.929C5.19025 23.8039 5.316 23.6789 5.44556 23.5501C7.28222 21.7371 7.28221 21.7371 8.27762 21.0764C8.40114 21.1996 8.40115 21.1996 8.52716 21.3253C10.5345 23.3273 12.5423 25.3288 14.5506 27.3299C15.5218 28.2976 16.4929 29.2655 17.4636 30.2337C18.31 31.078 19.1568 31.9221 20.0038 32.7657C20.452 33.2121 20.9 33.6586 21.3477 34.1055C21.7698 34.5269 22.1924 34.9479 22.6152 35.3686C22.8426 35.5951 23.0696 35.822 23.2966 36.0488C24.0059 36.7538 24.7225 37.4381 25.4863 38.0845C26.0148 38.5445 26.4998 39.0484 26.9903 39.5478C27.2194 39.7786 27.4485 40.0094 27.6777 40.2402C28.032 40.5979 28.3859 40.9559 28.739 41.3148C30.3729 42.9739 31.9499 44.5291 34.0729 45.5593C34.1803 45.612 34.2878 45.6648 34.3985 45.7191C35.9132 46.4341 37.5687 46.8852 39.248 46.9572C39.3684 46.9636 39.4887 46.97 39.6128 46.9765C43.3307 47.0784 46.6002 45.6815 49.3575 43.2828C49.964 42.6932 50.5414 42.0787 51.1177 41.4602C51.2876 41.2796 51.4576 41.0991 51.6277 40.9187C51.9947 40.5294 52.361 40.1394 52.727 39.7491C53.747 38.6613 54.7718 37.578 55.7964 36.4946C55.905 36.3797 56.0136 36.2648 56.1255 36.1465C57.846 34.3272 59.5784 32.5197 61.3196 30.7202C61.4381 30.5977 61.5565 30.4753 61.6786 30.3491C62.9039 29.083 64.1307 27.8184 65.3588 26.555C65.989 25.9065 66.6189 25.2577 67.2485 24.6087C67.3737 24.4795 67.499 24.3504 67.6281 24.2173C69.392 22.3976 71.1354 20.5603 72.8644 18.7079C75.8406 15.5194 78.8519 12.3688 81.9362 9.28364C82.0546 9.16501 82.1731 9.04639 82.2951 8.92417C90.0573 1.16124 96.5779 -3.73816 108.085 -0.514779Z"
                  fill="white"
                />
                <path
                  id="Vector_2"
                  d="M45.8261 0.306144C45.9519 0.337884 46.0778 0.369624 46.2074 0.402326C50.3604 1.47746 54.4576 3.43116 57.4324 6.58409C57.6968 6.85219 57.9716 7.09257 58.2597 7.33503C59.1523 8.10741 59.9794 8.94512 60.813 9.7793C60.9862 9.95209 61.1595 10.1249 61.3329 10.2976C61.7854 10.7488 62.2375 11.2004 62.6895 11.6522C63.1503 12.1126 63.6116 12.5725 64.0728 13.0325C64.8821 13.8398 65.691 14.6474 66.4997 15.4554C66.7758 15.7311 67.0522 16.0067 67.3288 16.2819C67.2083 16.4011 67.0878 16.5202 66.9637 16.643C66.5114 17.0904 66.0596 17.5383 65.608 17.9864C65.4135 18.1793 65.2188 18.372 65.0239 18.5646C63.618 19.9542 63.618 19.9542 62.2929 21.4195C61.7834 21.9972 61.2285 22.5315 60.6794 23.0717C60.562 23.1878 60.4447 23.304 60.3237 23.4236C60.0381 23.7061 59.7522 23.9881 59.4659 24.2698C59.009 24.0633 58.6813 23.8472 58.3296 23.4918C58.2374 23.3995 58.1452 23.3072 58.0503 23.2121C57.9523 23.1124 57.8543 23.0127 57.7534 22.91C57.5991 22.7551 57.5991 22.7551 57.4416 22.5971C57.1127 22.2668 56.7848 21.9354 56.4571 21.6039C56.1316 21.2754 55.8058 20.9471 55.4795 20.6193C55.2769 20.4156 55.0746 20.2115 54.8729 20.0068C54.2795 19.4094 53.6635 18.8506 53.0249 18.3015C52.6189 17.945 52.2426 17.5646 51.8669 17.1768C51.7124 17.0195 51.5579 16.8622 51.4033 16.7051C51.1678 16.4647 50.9328 16.2239 50.6992 15.9818C48.1105 13.3045 44.8347 11.3336 41.0121 11.1697C40.8917 11.1633 40.7713 11.1569 40.6473 11.1503C36.8446 11.0462 33.4061 12.5275 30.6524 15.0756C29.9822 15.7163 29.329 16.374 28.6748 17.0308C28.4649 17.2404 28.255 17.4499 28.0449 17.6593C27.4971 18.2059 26.9502 18.7535 26.4036 19.3013C25.8437 19.862 25.2828 20.4218 24.7221 20.9817C23.6255 22.0769 22.5299 23.173 21.435 24.2698C20.8478 24.0239 20.4749 23.6722 20.0279 23.2248C19.9542 23.1515 19.8806 23.0782 19.8047 23.0027C19.5626 22.7614 19.3216 22.519 19.0806 22.2766C18.9125 22.1087 18.7443 21.9408 18.5761 21.773C18.1343 21.3319 17.6935 20.8899 17.2528 20.4477C16.8027 19.9963 16.3517 19.5458 15.9007 19.0952C15.0166 18.2116 14.1335 17.327 13.2511 16.4417C13.8726 15.7031 14.5158 14.998 15.1983 14.3151C15.2916 14.2211 15.3849 14.1272 15.4811 14.0304C15.7868 13.7229 16.0932 13.416 16.3997 13.1093C16.5055 13.0032 16.6114 12.8971 16.7205 12.7879C17.2815 12.226 17.8431 11.6647 18.405 11.1037C18.9793 10.5302 19.5516 9.95491 20.1235 9.37915C20.569 8.93149 21.0158 8.48529 21.4631 8.03945C21.6744 7.82831 21.8852 7.61664 22.0953 7.40439C23.8748 5.60904 25.768 4.00938 28.0142 2.81235C28.1347 2.74713 28.2553 2.68191 28.3796 2.61472C30.3483 1.5709 32.4341 0.847252 34.5933 0.306144C34.697 0.279527 34.8007 0.252909 34.9075 0.225485C38.2555 -0.591309 42.4933 -0.557924 45.8261 0.306144Z"
                  fill="white"
                />
                <path
                  id="Vector_3"
                  d="M84.5017 33.5364C84.9471 33.7391 85.2757 33.9475 85.6214 34.2921C85.7111 34.3807 85.8008 34.4694 85.8933 34.5607C85.9897 34.6577 86.0862 34.7546 86.1856 34.8545C86.2887 34.9569 86.3919 35.0592 86.4982 35.1647C86.8391 35.5036 87.1789 35.8436 87.5187 36.1836C87.756 36.4201 87.9935 36.6566 88.231 36.893C88.7291 37.3892 89.2266 37.8858 89.7238 38.3829C90.3586 39.0176 90.9944 39.6512 91.6306 40.2845C92.1214 40.7732 92.6118 41.2623 93.1021 41.7516C93.3362 41.9851 93.5704 42.2186 93.8047 42.452C94.1338 42.78 94.4623 43.1085 94.7907 43.4371C94.8862 43.5321 94.9817 43.6271 95.08 43.7249C95.6633 44.31 96.2128 44.9163 96.7546 45.5394C97.1093 45.9408 97.4837 46.319 97.8645 46.6958C97.9411 46.7719 98.0177 46.8479 98.0966 46.9263C98.2604 47.0887 98.4244 47.251 98.5886 47.4131C98.8496 47.6709 99.11 47.9292 99.3703 48.1876C99.9231 48.7361 100.476 49.2839 101.03 49.8317C101.672 50.4673 102.314 51.1032 102.955 51.7397C103.21 51.9921 103.465 52.2439 103.72 52.4957C104.487 53.2556 105.238 54.0209 105.938 54.8426C106.284 55.2414 106.659 55.6044 107.037 55.9724C107.284 56.2124 107.529 56.4545 107.77 56.7013C107.77 56.754 107.77 56.8067 107.77 56.861C94.5705 58.994 94.5705 58.994 89.9205 55.6587C88.004 54.196 86.3232 52.4857 84.7023 50.7104C84.5685 50.564 84.4347 50.4175 84.2969 50.2667C82.7577 48.5703 81.2858 46.8263 79.8701 45.0267C79.0931 44.046 78.2639 43.12 77.3709 42.2432C77.2321 42.1064 77.0933 41.9697 76.9503 41.8288C76.8475 41.7283 76.7447 41.6278 76.6388 41.5243C77.4415 40.5589 78.3128 39.6773 79.205 38.794C79.3584 38.6417 79.5117 38.4892 79.665 38.3368C80.0651 37.9391 80.4657 37.5418 80.8664 37.1447C81.2765 36.738 81.6862 36.3308 82.096 35.9237C82.8974 35.1275 83.6994 34.3318 84.5017 33.5364Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4340_12292">
                  <rect
                    width="108.989"
                    height="57.8701"
                    fill="white"
                    transform="translate(0.09375 0.259766)"
                  />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
      </Box>

      <SecondSection welcome={data?.data?.welcome} language={language} />
      <ThirdSection whyUs={data?.data?.whyUs} language={language} />
      <FourdSection offer={data?.data?.offer[0]} language={language} />
      <StepsPage
        darkMode={darkMode}
        step={data?.data?.step}
        language={language}
      />
      <StepsPageMobile
        darkMode={darkMode}
        step={data?.data?.step}
        language={language}
      />
      <NewPage download={data?.data?.download[0]} language={language}/>
      <StyledPage category={ data?.data?.category } language={ language } safety={data?.data?.safety } />
       <AccordionPage faq={ data?.data?.faq } language={ language }/>
      <FeatureSection apiSection={ data?.data?.apiSection} language={language} />
      <Footer language={language} />
    </>
  );
}

export default Home;
