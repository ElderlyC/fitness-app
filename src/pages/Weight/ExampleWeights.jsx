const exampleList = [
  {
    date: "2023-05-01",
    weight: 70.8,
  },
  {
    date: "2023-05-02",
    weight: 70.5,
  },
  {
    date: "2023-05-03",
    weight: 69.9,
  },
  {
    date: "2023-05-04",
    weight: 69.9,
  },
  {
    date: "2023-05-05",
    weight: 69.8,
  },
  {
    date: "2023-05-06",
    weight: 69.8,
  },
  {
    date: "2023-05-07",
    weight: 69.5,
  },
  {
    date: "2023-05-08",
    weight: 69.1,
  },
  {
    date: "2023-05-09",
    weight: 68.8,
  },
  {
    date: "2023-05-10",
    weight: 68.6,
  },
  {
    date: "2023-05-11",
    weight: 68.3,
  },
  {
    date: "2023-05-12",
    weight: 68.7,
  },
  {
    date: "2023-05-13",
    weight: 68.6,
  },
  {
    date: "2023-05-14",
    weight: 68.5,
  },
  {
    date: "2023-05-15",
    weight: 67.8,
  },
  {
    date: "2023-05-16",
    weight: 68,
  },
  {
    date: "2023-05-17",
    weight: 68.7,
  },
  {
    date: "2023-05-18",
    weight: 68.9,
  },
  {
    date: "2023-05-19",
    weight: 69.5,
  },
  {
    date: "2023-05-20",
    weight: 70,
  },
  {
    date: "2023-05-21",
    weight: 69.8,
  },
  {
    date: "2023-05-22",
    weight: 69.1,
  },
  {
    date: "2023-05-23",
    weight: 68.8,
  },
  {
    date: "2023-05-24",
    weight: 69.7,
  },
  {
    date: "2023-05-25",
    weight: 69.7,
  },
  {
    date: "2023-05-26",
    weight: 68.8,
  },
  {
    date: "2023-05-27",
    weight: 71,
  },
  {
    date: "2023-05-28",
    weight: 71.7,
  },
  {
    date: "2023-05-29",
    weight: 71.2,
  },
  {
    date: "2023-05-30",
    weight: 71,
  },
  {
    date: "2023-05-31",
    weight: 71.6,
  },
  {
    date: "2023-06-01",
    weight: 71.4,
  },
  {
    date: "2023-06-02",
    weight: 71.2,
  },
  {
    date: "2023-06-03",
    weight: 70.9,
  },
  {
    date: "2023-06-04",
    weight: 71,
  },
  {
    date: "2023-06-05",
    weight: 70.4,
  },
  {
    date: "2023-06-06",
    weight: 70.3,
  },
  {
    date: "2023-06-07",
    weight: 70.6,
  },
  {
    date: "2023-06-08",
    weight: 71.9,
  },
  {
    date: "2023-06-09",
    weight: 72.4,
  },
  {
    date: "2023-06-10",
    weight: 71.1,
  },
  {
    date: "2023-06-11",
    weight: 70.7,
  },
  {
    date: "2023-06-12",
    weight: 71,
  },
  {
    date: "2023-06-13",
    weight: 70.5,
  },
  {
    date: "2023-06-14",
    weight: 71.7,
  },
  {
    date: "2023-06-15",
    weight: 71.2,
  },
  {
    date: "2023-06-16",
    weight: 71.4,
  },
  {
    date: "2023-06-17",
    weight: 70.3,
  },
  {
    date: "2023-06-18",
    weight: 70.7,
  },
  {
    date: "2023-06-19",
    weight: 70.9,
  },
  {
    date: "2023-06-20",
    weight: 71.5,
  },
  {
    date: "2023-06-21",
    weight: 71.7,
  },
  {
    date: "2023-06-22",
    weight: 71.9,
  },
  {
    date: "2023-06-23",
    weight: 71.7,
  },
  {
    date: "2023-06-24",
    weight: 71.4,
  },
  {
    date: "2023-06-25",
    weight: 71.2,
  },
  {
    date: "2023-06-26",
    weight: 70.9,
  },
  {
    date: "2023-06-27",
    weight: 71.1,
  },
  {
    date: "2023-06-28",
    weight: 71.2,
  },
  {
    date: "2023-06-29",
    weight: 71.2,
  },
  {
    date: "2023-06-30",
    weight: 71.5,
  },
  {
    date: "2023-07-01",
    weight: 71.3,
  },
  {
    date: "2023-07-02",
    weight: 71.1,
  },
  {
    date: "2023-07-03",
    weight: 71,
  },
  {
    date: "2023-07-04",
    weight: 70.7,
  },
  {
    date: "2023-07-05",
    weight: 71.4,
  },
  {
    date: "2023-07-06",
    weight: 71.4,
  },
  {
    date: "2023-07-07",
    weight: 70.7,
  },
  {
    date: "2023-07-08",
    weight: 70.7,
  },
  {
    date: "2023-07-09",
    weight: 70,
  },
  {
    date: "2023-07-10",
    weight: 70.4,
  },
  {
    date: "2023-07-11",
    weight: 70.4,
  },
  {
    date: "2023-07-12",
    weight: 70.3,
  },
  {
    date: "2023-07-13",
    weight: 70.3,
  },
  {
    date: "2023-07-14",
    weight: 69.4,
  },
  {
    date: "2023-07-15",
    weight: 69.7,
  },
  {
    date: "2023-07-16",
    weight: 72,
  },
  {
    date: "2023-07-17",
    weight: 71.5,
  },
  {
    date: "2023-07-18",
    weight: 71,
  },
  {
    date: "2023-07-19",
    weight: 70.9,
  },
  {
    date: "2023-07-20",
    weight: 70.5,
  },
  {
    date: "2023-07-21",
    weight: 70.6,
  },
  {
    date: "2023-07-22",
    weight: 70.8,
  },
  {
    date: "2023-07-23",
    weight: 70.6,
  },
  {
    date: "2023-07-24",
    weight: 70.8,
  },
  {
    date: "2023-07-25",
    weight: 70.4,
  },
  {
    date: "2023-07-26",
    weight: 69.2,
  },
  {
    date: "2023-07-27",
    weight: 69.3,
  },
  {
    date: "2023-07-28",
    weight: 69.5,
  },
  {
    date: "2023-07-29",
    weight: 70,
  },
];

export default exampleList;
