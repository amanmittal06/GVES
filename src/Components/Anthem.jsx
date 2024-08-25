import styles from './Anthem.module.css'
import Song from '../assets/Anthem.wav'


const Anthem =()=>{

    return(
        <center className={styles.container}>
           
            <audio className={styles.audio} controls>
                <source src={Song} type="audio/wav"/>
                Your browser does not support this audio
            </audio>
         </center>
    )

} 

export default Anthem