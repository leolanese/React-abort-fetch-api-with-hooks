import React, { useEffect, useState } from "react";

export default function NewsAbortingRequest(props: any) {
	const [count, setCount] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		fetch(`https://newsapi.org/v2/top-headlines?sources=${props.division}&apiKey=${props.term}`, {
			signal: controller.signal
		})
			.then(response => {
				return response.json();
			})
			.then(json => {
				console.log(json);
				setCount(json.totalResults);
				setLoading(false);
			})
			.catch(error => console.log("aborted")); // catching the error

		return function cleanup() {
			controller.abort(); // calling controller.abort() to the fetch promise rejects with an AbortError
		};

	}, [props.term, props.division]);

	return <div>{loading ? "Loading..." : count}</div>;
}
