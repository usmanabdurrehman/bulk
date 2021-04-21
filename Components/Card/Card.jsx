import React from "react";
import styles from "./Card.module.css";

export default function Card({header,description,image}) {
	return (
		<div className={styles.card}>
			<div className={styles.hoverLineTop}></div>
			<div className={styles.hoverLineBottom}></div>
			{image && <img src={image}/>}
			<h2>{header}</h2>
			<p>
				{description}
			</p>
		</div>
	);
}
