import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer i0SljG_0Cbqswfm79osh4L_-7KN8ZDwbS94F4jgtF_m3me3-Cj5dyezC40tJXYC5a-PhnmTdBJLMrB3sZkHAqSBhx3irpCRWFFSgAept2A9ofsgnUDUvNQHAocHzXXYx"
	}
});
