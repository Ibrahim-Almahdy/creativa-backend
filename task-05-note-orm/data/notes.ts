interface Note {
  id: number;
  title: string;
  price: number;
}

let notes: Note[] = [
  { id: 1, title: "js course", price: 1000 },
  { id: 2, title: "python course", price: 1500 },
  { id: 3, title: "React course", price: 800 },
];

module.exports = notes;
