import React from "react";
import { render } from "@testing-library/react";
import { Driver } from "./Driver";

const mockDriver =
  {
		"gender": "female",
		"name": {
			"title": "Miss",
			"first": "Rania",
			"last": "Valstad"
		},
		"location": {
			"street": {
				"number": 4206,
				"name": "Iduns gate"
			},
			"city": "Fardalen",
			"state": "Finnmark - Finnmárku",
			"country": "Norway",
			"postcode": "5864",
			"coordinates": {
				"latitude": "49.2233",
				"longitude": "41.5418"
			},
			"timezone": {
				"offset": "+5:00",
				"description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
			}
		},
		"email": "rania.valstad@example.com",
		"login": {
			"uuid": "ce1a6623-3845-4240-b5d2-c32c4b9fddd0",
			"username": "bluepeacock295",
			"password": "somethin",
			"salt": "Fptiscnu",
			"md5": "0c009dbd9acb60a5f7c83c6a564d527f",
			"sha1": "fbc758867b64c04ec760018d73917d72170f10ed",
			"sha256": "a8fd804fea59a6e43058d6689bfa8ff9a92b44e86013b4c2f64956a14aebf05b"
		},
		"dob": {
			"date": "1951-07-10T14:38:36.404Z",
			"age": 70
		},
		"registered": {
			"date": "2015-12-18T10:08:26.881Z",
			"age": 6
		},
		"phone": "75988800",
		"cell": "93143132",
		"id": {
			"name": "FN",
			"value": "10075112632"
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/26.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
		},
		"nat": "NO"
	}


test("renders driver name", () => {
  const { getByText } = render(<Driver data={mockDriver}/>);
  expect(getByText(/Rania/i)).toBeInTheDocument();
});

test("renders driver age", () => {
  const { getByText } = render(<Driver data={mockDriver}/>);
  expect(getByText(/70/i)).toBeInTheDocument();
});
