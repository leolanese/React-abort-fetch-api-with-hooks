import React, { useState, useEffect } from "react";

export default function NewsRequest(props: any) {
	const [hasError, setErrors] = useState(false);
	const [planets, setPlanets] = useState({});

	async function fetchData() {
		console.log('props', props)
		const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${props.division}&apiKey=${props.term}`);
		res
			.json()
			.then(res => setPlanets(res))
			.catch(err => setErrors(err));
	}

	useEffect(() => { // hooking async call
		fetchData();
	}, []);

	return (
		<div>
			<span>{JSON.stringify(planets, null, 1)}</span>
			<hr />
			<span>Has error: {JSON.stringify(hasError, null, 2)}</span>
		</div>
	);
};
