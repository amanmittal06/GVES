import styles from './Header.module.css'
import { MdOutlineMenu } from "react-icons/md";
import LOGO from '../assets/GVES-05.png'
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { MdExpandMore, MdExpandLess } from "react-icons/md";


const Header = () =>{

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = ()=>{
        setMenuActive(!menuActive);
    }

    const [expandMenu, setExpandMenu] = useState(false);
    const toggleExpandMenu = ()=>{
        setExpandMenu(!expandMenu);
    }
    
   
    return(
       <div>
        <div className={styles.header}>
            <img className= {styles.logo} src={LOGO} alt="" width="18%"/>
            {menuActive==true?<RxCross1 className={styles.crossIcon} onClick={()=>{toggleMenu()}}/>:<MdOutlineMenu className={styles.menuIcon}  onClick={()=>{toggleMenu()}}/>}   
        </div>
        <div className={menuActive?styles.menuActive: styles.menuDisabled}>
            <div className={styles.menuContainer}>
                {/* <Link   className={styles.buttons} to="/results">Results</Link>    */}
                <Link className={styles.buttons} to='https://gves.in' title='Goudiya Vedanta Educational Society'>Home</Link>
                <Link className={`${styles.buttons} ${styles.schools}`} >
                <div className={styles.ourSchools} onClick={()=>{toggleExpandMenu()}}>
                  <div>Our schools</div>
                  <div style={{fontSize:'150%', fontWeight:'400'}} > {expandMenu==false?`+`:`-`} </div>
                </div>
                <div className={expandMenu?styles.expandedMenuActive: styles.expandedMenuDisabled}>
                   <Link className={styles.innerLinks}><strong>{`>`}</strong>&nbsp; Goudiya Vedanta Vidyalaya, Ganjam</Link>  
                            
                </div>
                </Link>
                <Link to='/anthem' className={styles.buttons} >Our anthem</Link>
                <Link className={styles.buttons} >About us</Link>
                <Link className={styles.buttons} >Contact us</Link>
            </div>
        </div>
       </div> 
    )

}

export default Header