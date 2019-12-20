import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
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

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text> {errorMessage} </Text> : null}
			<Text> We have found {results.length} results </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
