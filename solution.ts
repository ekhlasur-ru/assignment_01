function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }

  return value;
}

//2
function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
}
//3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

//4

function filterByRating(books: { title: string; rating: number }[]) {
  return books.filter((book) => book.rating >= 4);
}

// 5

function filterActiveUsers(
  users: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[]
) {
  return users.filter((users) => users.isActive === true);
}

//6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book) {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

//7
