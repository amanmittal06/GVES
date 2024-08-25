import styles from './Header.module.css'
import { MdOutlineMenu } from "react-icons/md";
import LOGO from '../assets/GVES-LOGO-2.png'
import { RxCross1 } from "react-icons/rx";
import { MdOutlineLogout, MdDelete } from "react-icons/md";
import { useState } from 'react';

const Header = () =>{

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = ()=>{
        setMenuActive(!menuActive);
    }

   
    return(
        <div className={styles.header}>
            <img className= {styles.logo} src={LOGO} alt="" width="15%"/>
            {menuActive==true?<RxCross1 className={styles.crossIcon} onClick={()=>{toggleMenu()}}/>:<MdOutlineMenu className={styles.menuIcon}  onClick={()=>{toggleMenu()}}/>}
            <div className={menuActive?styles.menuActive: styles.menuDisabled}>
              <div className={styles.menuContainer}>
                {/* <Link   className={styles.buttons} to="/results">Results</Link>    */}
                <button className={styles.buttons} >Home</button>
                <button className={styles.buttons} >Academics</button>
                <button className={styles.buttons} >Careers</button>
                <button className={styles.buttons} >About us</button>
                <button className={styles.buttons} >Contact us</button>
              </div>
           </div>
            
        </div>
    )

}

export default Header