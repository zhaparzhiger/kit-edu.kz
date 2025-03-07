import styles from '../styles/main.module.css';
import Pagemain from '../../components/Pagemain'
import Video from '../../components/Video'
import Cardblock from '../../components/Cardblock'
import Major from '../../components/Major'
import News from '../../components/News'
import Reviews from '../../components/Reviews'
import Questions from '../../components/Questions'
import Partners from '../../components/Partners'
import Footer from '../../components/Footer'
const page = () => {
     return (
    <div className={styles.wrapper}>
      <Pagemain/>
      <Video/>
      <Cardblock/>
      <Major/>
      <News/>
      <Reviews/>
      <Questions/>
      <Partners/>
      <Footer/>
</div>
  )
}

export default page
