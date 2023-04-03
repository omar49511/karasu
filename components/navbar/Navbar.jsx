/* eslint-disable @next/next/no-img-element */
import styles from "./Navbar.module.css";
import { Search, Notifications, ArrowDropDown} from '@mui/icons-material';


const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" /> */}
          {/* <img
            src="https://user-images.githubusercontent.com/72781778/175261795-41541f92-357c-4959-a9f4-a14b10ebc994.png"
            alt=""
          /> */}
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
