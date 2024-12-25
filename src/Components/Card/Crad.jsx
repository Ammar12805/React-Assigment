import React from 'react'
import styles from './Card.module.css'

 const Crad = ({image,title,price,description,category}) => {
  return (
    <div className={styles.divContainer}>
        <img className={styles.img} width={'200px'} src={image} alt="" />
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{description}</p>
        <h3>{category}</h3>
    </div>
  )
}
export default Crad