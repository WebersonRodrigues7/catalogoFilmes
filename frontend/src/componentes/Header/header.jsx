import  styles from "./header.module.css"
import { IoSearch } from "react-icons/io5";
export default function Header (){
  return (
    <header className={styles.Header}>
      <h1>Filme<span>Base</span></h1>
<ul>
  <li>Home</li>
  <li>Contat us</li>
  <li>Movie</li>
  <li>Series</li>
</ul>
<div className={styles.Lupa}><IoSearch />
</div>
    </header>
  )
}