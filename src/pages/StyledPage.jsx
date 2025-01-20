import React from "react";
import "./StyledPage.css";

function StyledPage() {
  return (
    <div className="styled-page-container">
      {/* الكارد الثاني - الأصفر (تم نقله ليكون الكارد الأول) */}
      <div className="main-card main-card-yellow">
        {/* التأثير الضوئي في الكارد الأصفر */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127.757px"
          height="127.757px"
          viewBox="0 0 446 451"
          fill="none"
          className="glow-effect glow-yellow"
        >
          <g opacity="0.6" filter="url(#filter0_f_4340_12553)">
            <circle cx="414.125" cy="36.2056" r="63.8784" fill="#E9BA00" />
          </g>
          <defs>
            <filter
              id="filter0_f_4340_12553"
              x="0.24707"
              y="-377.673"
              width="827.757"
              height="827.757"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="175"
                result="effect1_foregroundBlur_4340_12553"
              />
            </filter>
          </defs>
        </svg>

        {/* الكروت الصغيرة داخل الكارد الأصفر */}
        <div className="small-cards-container">
          {["كارد 1", "كارد 2", "كارد 3", "كارد 4", "كارد 5", "كارد 6"].map(
            (text, index) => (
              <div key={index} className="small-card">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#00BF16" />
                </svg>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* الكارد الأول - الأخضر (تم نقله ليكون الكارد الثاني) */}
      <div className="main-card main-card-green">
        {/* التأثير الضوئي في الكارد الأخضر */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127.757px"
          height="127.757px"
          viewBox="0 0 462 451"
          fill="none"
          className="glow-effect glow-green"
        >
          <g opacity="0.6" filter="url(#filter0_f_4340_12577)">
            <circle cx="47.8862" cy="36.2056" r="63.8784" fill="#00BF16" />
          </g>
          <defs>
            <filter
              id="filter0_f_4340_12577"
              x="-365.992"
              y="-377.673"
              width="827.757"
              height="827.757"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="175"
                result="effect1_foregroundBlur_4340_12577"
              />
            </filter>
          </defs>
        </svg>

        <div className="small-cards-container">
  {["كارد 1", "كارد 2", "كارد 3", "كارد 4", "كارد 5", "كارد 6"].map(
    (text, index) => (
      <div key={index} className="small-card">
        {/* الصورة الأمامية والنص */}
        <div className="card-content">
          <div className="image-wrapper">
            <img src="/game.png" alt="game icon" className="card-icon" />
          </div>
          <span>{text}</span>
        </div>
      </div>
    )
  )}
</div>


      </div>
    </div>
  );
}

export default StyledPage;
