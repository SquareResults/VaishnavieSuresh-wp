import React, { useState } from 'react';
import { Montserrat } from 'next/font/google' 
import styles from './menu.module.css';


const montserrat = Montserrat({
  weight: ["500"],
  subsets: ['latin']
})

const MenuItem = ({ item, handleMenuItemClick, isActive}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <li className={`${styles.menu_list} ${isActive ? styles.active : ''}`} onClick={() => {
        setShowSubMenu(!showSubMenu);
        handleMenuItemClick(item.ref);
      }}>
      {item.title}
      {item.subMenuItems && showSubMenu && (
        <ul style={{listStyle: 'none'}}> 
          {item.subMenuItems.map((subItem) => (
            <li key={subItem.id} onClick={(e) => {
              e.stopPropagation();
              handleMenuItemClick(subItem.ref);
            }}>
              <div className={montserrat.className}>
                <div className={styles.subitem}>
                  {subItem.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;