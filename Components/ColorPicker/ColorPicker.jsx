import React from 'react'
import dynamic from 'next/dynamic'

const DynamicColorPicker = dynamic(
  () => import('react-color-picker-wheel'),
  { ssr: false }
)


export default function ColorPicker() {
	return (
		<div>
			<DynamicColorPicker
				initialColor="#FF0000"
				onChange={(color) => console.log(color)}
				//Console output => { hex: "#FF0000", rgb : { r: 255, g: 0, b: 0 } , hsl : { h: 0, s: 100, l: 50 }
				size={300}
			/>

		</div>
	)
}