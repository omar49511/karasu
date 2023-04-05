/* eslint-disable @next/next/no-img-element */
import styles from "./Navbar.module.css";
import { Search, Notifications, ArrowDropDown} from '@mui/icons-material';
import { useState, useEffect } from 'react';


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? `${styles.navbar} ${styles.scrolled}` : `${styles.navbar}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://user-images.githubusercontent.com/72781778/175261795-41541f92-357c-4959-a9f4-a14b10ebc994.png"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My list</span>
        </div>
        <div className={styles.right}>
          <Search className={styles.icon}/>
          <span>KID</span>
          <Notifications className={styles.icon}/>
          <img
            src="https://media.tenor.com/fIimi9uEIwQAAAAC/roman.gif"
            alt="img"
          />
          <div className={styles.profile}>
            <ArrowDropDown className={styles.icon}/>
            <div className={styles.options}>
              <span>Settings</span>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
