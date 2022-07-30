import type { RandomUserResponse } from "../../model/random-user";
import type { NormalizedRandomUser } from "../types";

export const randomUserDataMock: RandomUserResponse = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Emil", last: "Perala" },
      location: {
        street: { number: 5831, name: "Hämeenkatu" },
        city: "Laihia",
        state: "South Karelia",
        country: "Finland",
        postcode: 41212,
        coordinates: { latitude: "-26.4930", longitude: "-174.2537" },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "emil.perala@example.com",
      login: {
        uuid: "4b3936a5-a5bb-4483-81b4-78c240ecb44d",
        username: "sadfish512",
        password: "bang",
        salt: "NwUSsImr",
        md5: "833c5639f5608c8b08eeb7bcf3ee9165",
        sha1: "74f6cbfaa422f582a788b5988a20e21103931eaf",
        sha256:
          "a857c8e68fd7b416f6b5d580cd1a9ac7e9efe81c9749616fdd37be5b08814b41",
      },
      dob: { date: "1974-10-04T23:27:40.949Z", age: 47 },
      registered: { date: "2017-06-29T00:00:44.930Z", age: 5 },
      phone: "04-097-722",
      cell: "048-119-09-11",
      id: { name: "HETU", value: "NaNNA985undefined" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
      },
      nat: "FI",
    },
  ],
  info: { seed: "158bb359a42cafd2", results: 1, page: 1, version: "1.4" },
};

export const normalizedRandomUserDataMock: NormalizedRandomUser[] = [
  {
    email: "emil.perala@example.com",
    gender: "male",
    name: "Emil Perala",
    username: "sadfish512",
    registered_date: "2017-06-29T00:00:44.930Z",
  },
];
