import { useCallback, useEffect, useState } from 'react'

const App = () => {
	const [count, setCount] = useState(0)

	const handleClick = useCallback(() => {
		setCount(count => count + 1)
	})

	useEffect(() => {
		const { MainButton } = window.Telegram.WebApp

		MainButton.setText('increment')
		MainButton.onClick(handleClick)
		MainButton.show()
	})

	return (
		<div>
			<button onClick={handleClick}>Click me</button>
		</div>
	)
}

export default App
