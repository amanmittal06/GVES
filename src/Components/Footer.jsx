import styles from './Footer.module.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { PiCopyrightLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {

    return(
      <div className={styles.footerSection}> 
          <div className={styles.heading}>CONTACT INFO</div>
          <div className={styles.contactUs}>
           <p className ={styles.footerLinks}> <IoLocationOutline className={styles.footerIcons}/>&nbsp;1st floor, S.K Nagar, Angaragaon, Ganjam, Odisha</p>
           <a className ={styles.footerLinks} href="tel:+916388082087" target='_blank'><IoMdCall className={styles.footerIcons}/>&nbsp;+91 6388082087</a>
           <a className ={styles.footerLinks} href="mailto:amanagrawal0139@gmail.com" target='_blank'><CgMail className={styles.footerIcons}/>&nbsp;amanagrawal0139@gmail.com</a>
          </div>
          <hr className={styles.hrTag}/>
          <div className={styles.copyright}><PiCopyrightLight/> 2024 Goudiya Vedant Educational Society | All rights reserved</div>
     </div>
    )

}

export default Footer