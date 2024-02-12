import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { dropdownContext } from '@context/DropdownContext';

export default function Navbar() {
    const[dropdownVal,setDropdownVal]=useContext(dropdownContext);
    const handleDropdownVal=(e)=>{
        setDropdownVal(e.target.value);
        console.log(e.target.value);
    }
  return (
    <div className={styles.navBar}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} fontSize={`21px`} style={{marginLeft:`12px`}}/>
      </div>
      <div className={styles.navRight}>
        <div className={styles.favoriteBadge}>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.badge}>3</span>
        </div>
        <div className={styles.dropdown}>
          <select className={styles.select} value={dropdownVal} onChange={handleDropdownVal}>
          <option value="filterBy"  selected>Filter By</option>
          <option value="Name">Name</option>
        </select>
        </div>
      </div>
    </div>
  );
}
