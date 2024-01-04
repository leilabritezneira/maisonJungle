import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}
function CareScale({ value, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

		return (
			<div
				onClick={() =>
					alert(
						`Cette plante requiert ${quantityLabel[value]} ${
							careType === 'light' ? 'de lumière' : "d'arrosage"
						}`
					)
				}
			>
				{range.map((elem) =>
					value >= elem ? <span key={elem.toString()}>{scaleType}</span> : null
				)}
			</div>
		)
	}

export default CareScale