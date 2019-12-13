import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		const response = await Yelp.get("/search", {
			params: {
				limit: 50,
				term,
				location: "Boston"
			}
		});
		setResults(response.data.businesses);
	};

	return (
		<View>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
			<Text> Search Screen </Text>
			<Text> We have found {results.length} results </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
