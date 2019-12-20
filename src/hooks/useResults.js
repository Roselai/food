import React, { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async searchTerm => {
		try {
			const response = await Yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "Boston"
				}
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	};

	//Call searchApi when component is first rendered. BAD CODE!
	//searchApi('pasta');

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [searchApi, results, errorMessage];
};
