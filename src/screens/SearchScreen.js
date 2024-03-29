import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = price => {
		// price === '$' || '$$' || '$$$'
		if (results.length) {
			return results.filter(result => result.price === price);
		} else {
			return;
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text> {errorMessage} </Text> : null}
			<Text> We have found {results.length} results </Text>
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice("$")}
					title="Cost Effective"
				/>
				<ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
				<ResultsList
					results={filterResultsByPrice("$$$")}
					title="Big Spender"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
