// Slider.jsx
import { Slide } from "react-slideshow-image";
import slideImages from "../Images";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function Slider() {
  // Vertical transparent bars
  const PrevArrow = (
    <div className={`${styles.navBar} ${styles.navBarLeft}`}>
      <span className={styles.arrowIcon}>{"<"}</span>
    </div>
  );
  
  const NextArrow = (
    <div className={`${styles.navBar} ${styles.navBarRight}`}>
      <span className={styles.arrowIcon}>{">"}</span>
    </div>
  );

  const properties = {
    duration: 5000,           // 5 seconds per slide
    transitionDuration: 500,  // 500ms transition
    infinite: true,           // Loop indefinitely
    arrows: true,             // Enable navigation
    prevArrow: PrevArrow,
    nextArrow: NextArrow,
    autoplay: true,           // Explicitly enable autoplay (some versions need this)
    pauseOnHover: false,      // Prevent pausing on hover (optional)
  };

  console.log("Slide Images:", slideImages); // Debug output

  return (
    <div className={styles.container}>
      <Slide {...properties}>
        {slideImages && slideImages.length > 0 ? (
          slideImages.map((image, index) => (
            <div className={styles.slide} key={index}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                }}
              >
               
              </div>
            </div>
          ))
        ) : (
          <div>No images available</div>
        )}
      </Slide>
    </div>
  );
}