import React, { useState, useEffect } from "react";

const News = () => {
	const [hasError, setErrors] = useState(false);
	const [planets, setPlanets] = useState({});

	async function fetchData() {
	//	const res = await fetch("https://swapi.dev/api/planets/4/");

		const res = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c6f13b093e4b429aa4e86d7eff4f42a4");
		res
			.json()
			.then(res => setPlanets(res))
			.catch(err => setErrors(err));
	}

	useEffect(() => {
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
export default News;
