import Header from '../../componentes/Header/header'
import Hero from '../../componentes/Hero/Hero'
import styles from './catalogo.module.css'



export default function Catalogo() {
  return (
    <main>
      <div className={styles.banner}>
         <div className={styles.bannerBg} />
        <Header />
        <Hero />
      </div>
    </main>
  )
}