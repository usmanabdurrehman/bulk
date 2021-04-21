import React from 'react'
import styles from './Footer.module.css'

export default function Footer({colorSchemeFooter}) {
	return (
		<div className={styles.footer} style={colorSchemeFooter}>
			BulkBays, Copyright 2021
		</div>
	)
}