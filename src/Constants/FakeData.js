const FAKE_DATA = [
  {
    id: "fake-data-1",
    personalDetails: {
      name: "Darth Vader",
      designation: "Sith Lord",
      email: "dvader@force.com",
      phone: "4182552841",
      address: "Volcano Sea, Mustafar, Outer Rim, Galaxy far far away",
    },
    workPlaces: [
      {
        id: "175ca84b-6ec7-4155-99f4-3f808bd65fcf",
        name: "Empire",
        degree: "Sith Lord",
        start: "2250",
        end: "2270",
      },
      {
        id: "c240bcdc-6a01-4c2c-b84d-3a1261b6b388",
        name: "Old Galactic Republic",
        degree: "Apprentice",
        start: "2239",
        end: "2250",
      },
    ],
    institutes: [
      {
        id: "82454d76-fc87-4bad-b55a-8dc7f7f40d12",
        name: "Jedi Order",
        degree: "Knight",
        start: "2150",
        end: "2239",
      },
    ],
    selectedSkills: [
      {
        label: "Ligtht Saber",
        value: "Ligtht Saber",
        __isNew__: true,
      },
      {
        label: "Duel",
        value: "Duel",
        __isNew__: true,
      },
      {
        label: "Force Manipulation",
        value: "Force Manipulation",
        __isNew__: true,
      },
    ],
  },
  {
    id: "fake-data-2",
    personalDetails: {
      name: "Jeff Walker",
      designation: "Software Developer",
      email: "jwalker@gmail.com",
      phone: "4182552841",
      address: "221B, North London, London, United Kingdom",
    },
    workPlaces: [
      {
        id: "175ca84b-6ec7-4155-99f4-3f808bd65fcf",
        name: "Google",
        degree: "Fullstack Developer",
        start: "2021",
        end: "2023",
      },
      {
        id: "c240bcdc-6a01-4c2c-b84d-3a1261b6b388",
        name: "Microsoft",
        degree: "Frontend Developer",
        start: "2019",
        end: "2021",
      },
    ],
    institutes: [
      {
        id: "82454d76-fc87-4bad-b55a-8dc7f7f40d12",
        name: "Harvard",
        degree: "Bachelor of Science",
        start: "2015",
        end: "2019",
      },
      {
        id: "332ea82a-e441-40a9-b645-395875358a26",
        name: "Lynbrook High School",
        degree: "High School",
        start: "2014",
        end: "2015",
      },
    ],
    selectedSkills: [
      {
        value: "JavaScript",
        label: "JavaScript",
      },
      {
        value: "Node",
        label: "Node",
      },
      {
        value: "TypeScript",
        label: "TypeScript",
      },
      {
        value: "React",
        label: "React",
      },
    ],
  },
];

export default FAKE_DATA;
