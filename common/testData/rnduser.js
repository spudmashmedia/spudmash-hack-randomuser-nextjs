const single_user = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Soham", last: "Bates" },
      location: {
        street: { number: 6456, name: "High Street" },
        city: "Glasgow",
        state: "Herefordshire",
        country: "United Kingdom",
        postcode: "T7 4DL",
        coordinates: { latitude: "15.2680", longitude: "-21.8228" },
        timezone: { offset: "+4:30", description: "Kabul" }
      },
      email: "soham.bates@example.com",
      login: {
        uuid: "e0aa457f-2b86-468a-817f-dfc7c1ca1d00",
        username: "heavyzebra882",
        password: "back",
        salt: "iUIAyINb",
        md5: "45082d483c0f5dbdf531687bf9a0b853",
        sha1: "8ab79d79e92ec5db823b247d69c637c6d2d156cf",
        sha256:
          "b2120a7fa7e42b803a083ef7fc5bf0804fabc9430bfc003fb4d4f40714d794c9"
      },
      dob: { date: "1997-03-11T10:53:34.130Z", age: 23 },
      registered: { date: "2015-10-21T12:16:16.180Z", age: 5 },
      phone: "016977 9909",
      cell: "0739-796-204",
      id: { name: "NINO", value: "LJ 56 59 76 J" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      },
      nat: "GB"
    }
  ],
  info: { seed: "8c086a1fea3a3d27", results: 1, page: 1, version: "1.3" }
};

const single_user_expected_transform = [
  {
    id: "LJ 56 59 76 J",
    name: "Soham Bates",
    username: "heavyzebra882",
    password: "back",
    email: "soham.bates@example.com",
    phone: "016977 9909",
    location: "Glasgow, Herefordshire United Kingdom",
    image_thumb: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
    image_mid: "https://randomuser.me/api/portraits/med/men/44.jpg",
    image_lrg: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

export { single_user, single_user_expected_transform };
