import React,{useState} from 'react';
import styles from './FilterBar.module.css';

export default function FilterBar({filterVal}) {
  const [dropdownVal, setDropdownVal] = useState("filterBy");
  const handleDropdownVal = (e) => {
    setDropdownVal(e.target.value);
    filterVal(e.target.value);
    console.log(e.target.value);
  }
  
  return (
    <div className={styles.filterMenu}>
      <select className={styles.select} value={dropdownVal} onChange={handleDropdownVal}>
        <option value="filterBy" >Filter By</option>
        <option value="Name">Name</option>
      </select>
    </div>
  )
}
