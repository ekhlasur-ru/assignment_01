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
  0;
  return value;
}

function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
}

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

function filterByRating(books: { title: string; rating: number }[]) {
  return books.filter((book) => book.rating >= 4);
}

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

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];
  let index = 0;

  function exists(value: number | string, array: (number | string)[]): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i], result)) {
      result[index] = arr1[i];
      index++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i], result)) {
      result[index] = arr2[i];
      index++;
    }
  }
  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;
  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((sum, curr) => sum + curr, 0);
}
