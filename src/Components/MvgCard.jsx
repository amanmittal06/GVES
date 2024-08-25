/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './MvgCard.module.css'; // Example CSS module for styling


const Carousel = ({ mvg }) => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        arrows: false,
    };

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                {
                    mvg.map((item)=>(<div key={item.title} className={styles.card}>
                        <div className={styles.title}>
                          <item.icon/>&nbsp;{item.title}
                        </div>
                        <hr className={styles.hrTag}/>
                        <div className={styles.desc}>
                          "{item.desc}"
                        </div>
                    </div>))
                }
            </Slider>
        </div>
    );
}

export default Carousel;
