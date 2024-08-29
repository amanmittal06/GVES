import styles from './Home.module.css'
import MvgCard from './MvgCard';
import { BsRocketTakeoff } from "react-icons/bs";
import { IoMdCall, IoMdEye } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import Poster from '../assets/Home.png'



const Home =()=>{

    const mvg = [
        {title: "Mission", icon: BsRocketTakeoff , desc: "Our mission is to create educational institutions that blend academic excellence with Vedic spiritual wisdom. We emphasize compassion, kindness, love, equality, and resilience, striving to make our schools beacons of learning that inspire students to realize their true potential and make meaningful contributions to society."},
        {title: "Vision", icon: IoMdEye , desc: "Our vision is to provide transformative, high-quality education deeply rooted in ancient Vedic philosophy. We aim to empower students by fostering their intellectual, emotional, physical, and spiritual development, preparing them to lead with integrity and contribute to global peace, development, and environmental sustainability."},
        {title: "Goal" , icon: GoGoal, desc: "Our goals include developing a curriculum that integrates Vedic teachings with innovative educational methods, promoting holistic development through physical, intellectual, and spiritual growth, and fostering a culture of compassion and lifelong learning. We aim to collaborate globally, encourage leadership, and support environmental sustainability, ensuring our students are well-prepared to positively impact the world."}
    ];

    return(
        <div>
            <img src={Poster} alt="" className={styles.poster} width={"98%"}/>
            

            <div className={styles.callToAction}>
              <a className={styles.whatsAppButton} href="https://wa.me/919599767637"><FaWhatsapp/>&nbsp;Chat with us</a>
              <a className={styles.callUsButton} href="tel:+919599767637" target='_blank'><IoMdCall/>&nbsp;Call us</a>

            </div>


            <div className={styles.introduction}>
            
                <div className={styles.heading}>
                    About Goudiya Vedanta Educational Society
                </div>
                <div className={styles.description}>
                    The Goudiya Vedanta Educational Society {`(GVES)`} is a pioneering institution dedicated to blending academic excellence with the timeless wisdom of Vedic philosophy. Rooted in the teachings of the Bhagavad Gita and other sacred texts, GVES aims to foster holistic growth by nurturing the intellectual, emotional, physical, and spiritual dimensions of its students. Through innovative educational programs, GVES empowers individuals to achieve personal fulfillment, contribute to global peace, and lead lives enriched with compassion, resilience, and a deep connection to their cultural and spiritual heritage.
                </div>
                
                <div className={styles.heading}>
                    Mission, Vision and Goal
                </div>

                <div className={styles.description}>
                    At the Goudiya Vedanta Educational Society (GVES), we are driven by a commitment to blend academic excellence with the wisdom of Vedic philosophy. Our vision is to foster holistic development in students, empowering them to grow intellectually, emotionally, physically, and spiritually, while contributing to a peaceful and sustainable world. Guided by our mission, we aim to create institutions that embody compassion, equality, and resilience, and our goals reflect our dedication to integrating Vedic teachings, promoting leadership, and nurturing a compassionate society
                </div>

                <MvgCard mvg={mvg}></MvgCard>
    
            </div>
        </div>
    )

}

export default Home