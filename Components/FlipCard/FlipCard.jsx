import React from "react";
import styles from "./FlipCard.module.css";

export default function FlipCard({image,header,description}) {
	return (
		<div className={styles.flipCard}>
			<div className={styles.flipCardInner}>
				<div className={styles.flipCardFront}>
					<img src={image} alt="Avatar" />
					<div className={styles.headerWrapper}><div>{header}</div></div>
				</div>
				<div className={styles.flipCardBack}>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
