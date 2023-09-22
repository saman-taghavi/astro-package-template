export const addQueryParam = (key, value) => {
	const url = new URL(window.location.href)
	url.searchParams.set(key, value)
	window.history.pushState({}, "", url.toString())
}

export const getQueryParam = (key) => {
	const url = new URL(window.location.href)
	return url.searchParams.get(key) || ""
}
