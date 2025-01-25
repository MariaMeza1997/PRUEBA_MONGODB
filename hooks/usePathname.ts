import { useEffect, useState } from 'react'

export const usePathname = () => {

	const [pathname, setPathname] = useState('')

	useEffect(() => {
		setPathname(window.location.pathname)
	}, [])

	return { pathname }

}