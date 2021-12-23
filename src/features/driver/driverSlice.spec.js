import reducer, { next, previous, loadDrivers } from "./driverSlice";

const results = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Thomas",
      last: "Wilson",
    },
    location: {
      street: {
        number: 1792,
        name: "Queenstown Road",
      },
      city: "Whangarei",
      state: "Southland",
      country: "New Zealand",
      postcode: 89275,
      coordinates: {
        latitude: "61.6337",
        longitude: "-147.2825",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "thomas.wilson@example.com",
    login: {
      uuid: "ee32bfae-b717-45b6-8ad1-b41b7b5fbf1d",
      username: "tinybutterfly746",
      password: "paint",
      salt: "UEhEuSyV",
      md5: "7ce7c19bd5c422904740b0c479aa6b8c",
      sha1: "f4b506b5dfd9481d3130f6dd1ac70146b0110a38",
      sha256:
        "25c38c5a7d9a40e65b3ba5771be802e868e429fec0eb3bc9ed1a9e1581f80c6e",
    },
    dob: {
      date: "1959-05-15T21:11:07.710Z",
      age: 62,
    },
    registered: {
      date: "2004-04-12T18:41:20.118Z",
      age: 17,
    },
    phone: "(463)-979-0871",
    cell: "(315)-365-0445",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Elzeário",
      last: "Moraes",
    },
    location: {
      street: {
        number: 5702,
        name: "Avenida da Democracia",
      },
      city: "Mogi das Cruzes",
      state: "Piauí",
      country: "Brazil",
      postcode: 78915,
      coordinates: {
        latitude: "44.8151",
        longitude: "-139.4265",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "elzeario.moraes@example.com",
    login: {
      uuid: "5185a807-7816-459b-908a-c81bd7c27366",
      username: "happygorilla640",
      password: "chilli",
      salt: "GeQYDViD",
      md5: "b6c823e247203145bcb6993390172586",
      sha1: "1d1fd33dbc7638121c1726ba7009581f60e0f574",
      sha256:
        "76968fad1957d6a8c477f8cef54667856fbee0a0be0c3676b60a1a3095e008fd",
    },
    dob: {
      date: "1950-06-18T17:42:49.952Z",
      age: 71,
    },
    registered: {
      date: "2012-08-01T01:58:53.069Z",
      age: 9,
    },
    phone: "(49) 7951-0212",
    cell: "(24) 5666-4815",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/36.jpg",
    },
    nat: "BR",
  },
];

describe("driver reducer", () => {
  const initialState = {
    currentPage: 0,
    currentPageDrives: [],
    drivers: [],
    driversPerPage: 5,
    status: "idle",
    totalPages: 0,
  };
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      currentPage: 0,
      currentPageDrives: [],
      drivers: [],
      driversPerPage: 5,
      status: "idle",
      totalPages: 0,
    });
  });

  it("sets status to loading when loadDrivers is pending", () => {
    const action = { type: loadDrivers.pending.type };
    const state = reducer(initialState, action);
    expect(state.status).toEqual("loading");
  });

  it("sets the drivers and status to loading when loadDrivers is fulfilled", () => {
    const action = { type: loadDrivers.fulfilled.type, payload: { results } };
    const state = reducer(initialState, action);
    expect(state.drivers).toEqual(results);
    expect(state.status).toEqual("idle");
  });

  it("sets status to idle when loadDrivers is rejected", () => {
    const action = {
      type: loadDrivers.rejected.type,
      payload: { error: "mock error" },
    };
    const state = reducer(initialState, action);
    expect(state.status).toEqual("idle");
  });

  it("should handle next and previous", () => {
    let state = reducer(initialState, next());
    expect(state.currentPage).toEqual(1);
    state = reducer(state, previous());
    expect(state.currentPage).toEqual(0);
  });
});
