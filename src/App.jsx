import styles from './App.module.css'
import LOGO from './assets/GVES-LOGO.png'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  

  return (
    <div>
      <Header/>
      <center><img className={styles.logo} src={LOGO} alt="" width="50%"/></center>
      <Footer></Footer>
    </div>
  )
}

export default App
