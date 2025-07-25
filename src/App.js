import { useEffect, useState } from 'react'

export default function HomePage() {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const tg = window.Telegram?.WebApp
		if (tg) {
			tg.ready()
			setUser(tg.initDataUnsafe?.user)
		}
	}, [])

	return (
		<div>
			<h1>Welcome {user?.first_name}</h1>
		</div>
	)
}
