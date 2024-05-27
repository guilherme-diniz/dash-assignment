'use client'
import React from 'react'
import { Customer } from '../../types/Customer';
import styles from './ListItem.module.css';

export interface ListItemProps {
  style: React.CSSProperties;
  customer: Customer
}

export default function ListItem(props: ListItemProps) {
  return (
    <div style={{ ...props.style}}>
      <div className={styles.listItem}>
        <div className={styles.name}>
          {props.customer.name}
        </div>
        <div className={styles.email}>
          {props.customer.email}
        </div>      
        <div className={styles.phone}> 
          +{props.customer.phone}
        </div>      
        <div className={`${styles.gender} ${styles[props.customer.gender]}`}>
          {props.customer.gender}
        </div>
        <div className={styles.actions}>
          ...
        </div>
      </div>
    </div>
  )
}
