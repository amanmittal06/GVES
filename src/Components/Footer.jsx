import styles from './Footer.module.css'
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { PiCopyrightLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {

    return(
      <div className={styles.footerSection}> 
          <div className={styles.heading}>CONTACT INFO</div>
          <div className={styles.contactUs}>
           <p className ={styles.footerLinks}> <IoLocationOutline className={styles.location}/>&nbsp;&nbsp;&nbsp;<div> IGVT, Block B3, near musical fountain park, Janakpuri, NEW DELHI-110058</div></p>
           <a className ={styles.footerLinks} href="tel:+919599767637" target='_blank'><IoMdCall className={styles.footerIcons}/>&nbsp;&nbsp;+91 9599767637</a>
           <a className ={styles.footerLinks} href="mailto:secretary@gves.in" target='_blank'><CgMail className={styles.footerIcons}/>&nbsp;&nbsp;secretary@gves.in</a>
          </div>
          <hr className={styles.hrTag}/>
          <div className={styles.copyright}><PiCopyrightLight/> 2024 Goudiya Vedanta Educational Society | All rights reserved</div>
     </div>
    )

}

export default Footer