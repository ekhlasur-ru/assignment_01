# 01. What are some differences between interfaces and types in TypeScript?

টাইপস্ক্রিপ্টে ইন্টারফেস (Interface) এবং টাইপ (Type) উভয়ই অবজেক্টের গঠন সংজ্ঞায়িত করতে ব্যবহৃত হয়, কিন্ত এদের মধ্যে প্রধান পার্থক্য হলো যে ইন্টারফেসের সংজ্ঞা একাধিকবার করা যায় এবং এটি এক্সটেন্ড (extends) করা যায়, যা টাইপের(Type) ক্ষেত্রে সম্ভব নয়।

## Interface

- মূলত অবজেক্টের গঠন সংজ্ঞায়িত করতে ব্যবহৃত হয়।
- দুটি একই নামের ইন্টারফেস স্বয়ংক্রিয়ভাবে মার্জ করা যায়।
- extends কীওয়ার্ড ব্যবহার করে অন্য ইন্টারফেস থেকে বৈশিষ্ট্য গ্রহণ করতে পারে।
- ক্লাস বা অবজেক্টের জন্য একটি কন্ট্রাক্ট (contract) সংজ্ঞায়িত করতে আদর্শ।
- সাধারণত কম্পাইল করতে দ্রুত হয়।

## উদাহারণ:

```ts
interface Student {
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
}
const student1: Student = {
  name: "Ekhlasur Rahman",
  age: 26,
  isEnrolled: true,
  courses: ["Math", "Physics", "Chemistry"],
};
```

## Type

- যেকোনো টাইপ (যেমন অবজেক্ট, ইউনিয়ন, প্রিন্টেটিভ ইত্যাদি) সংজ্ঞায়িত করতে পারে।
- একটি টাইপ একবার সংজ্ঞায়িত হলে, তাকে পুনরায় সংজ্ঞায়িত করা যায় না।
- extends ব্যবহার করতে পারে না, তবে ইন্টারসেকশন অপারেটর (&) ব্যবহার করে টাইপকে একত্রিত করতে পারে।
- ইউনিয়ন টাইপ, ম্যাপড টাইপ বা অন্যান্য জটিল টাইপ সংজ্ঞায়িত করার জন্য বেশি উপযোগী।
- ইন্টারফেসের চেয়ে কম্পাইল হতে একটু বেশি সময় লাগতে পারে।

## উদাহারণ:

```ts
type Student = {
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
};
const student1: Student = {
  name: "Ekhlasur Rahman",
  age: 26,
  isEnrolled: true,
  courses: ["Math", "Physics", "Chemistry"],
};
```

# 02. Provide an example of using union and intersection types in TypeScript.

## Union Type এর একটি উদাহারণ:

```ts
let userId: string | number;

userId = 101;
userId = "A102";
```

## intersection Type এর একটি উদাহারণ:

```ts
type Person = {
  name: string;
};
type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Ekhlasur Rahman",
  employeeId: 18237128887,
};
```
