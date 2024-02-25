import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { booksListActionCreators } from "../../state-managment/reducers/books-list-reducer";
import store from "../../state-managment/store";
import { SpecificBookPage } from "./SpecificBook";
import { AuthActionCreators } from "../../state-managment/reducers/auth-reducer";

const books = [
  {
    id: 1,
    author: "David Flanagan",
    price: 10.99,
    image:
      "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
    title: "JavaScript: The Definitive Guide, 7th Edition",
    level: "Beginner",
    tags: ["core", "frontend", "javascript"],
    amount: 42,
    shortDescription:
      "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.",
    description:
      "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.",
  },
  {
    id: 2,
    author: "James Padolsey",
    price: 31.99,
    image: "",
    title: "Clean Code in JavaScript",
    level: "Middle",
    tags: ["core", "frontend", "javascript"],
    amount: 42,
    shortDescription:
      "Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community.",
    description:
      "Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community. The book starts with popular clean-coding principles such as SOLID, and the Law of Demeter (LoD), along with highlighting the enemies of writing clean code such as cargo culting and over-management. You'll then delve into JavaScript, understanding the more complex aspects of the language. Next, you'll create meaningful abstractions using design patterns, such as the Class Pattern and the Revealing Module Pattern. You'll explore real-world challenges such as DOM reconciliation, state management, dependency management, and security, both within browser and server environments. Later, you'll cover tooling and testing methodologies and the importance of documenting code. Finally, the book will focus on advocacy and good communication for improving code cleanliness within teams or workplaces, along with covering a case study for clean coding. By the end of this book, you'll be well-versed with JavaScript and have learned how to create clean abstractions, test them, and communicate about them via documentation.",
  },
  {
    id: 3,
    author: "Adam D. Scott",
    price: 8.99,
    image:
      "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_everywhere.jpg",
    title: "JavaScript Everywhere",
    level: "Beginner",
    tags: ["core", "frontend", "javascript"],
    amount: 42,
    shortDescription:
      "JavaScript is the little scripting language that could. Once used chiefly to add interactivity to web browser windows, JavaScript is now a primary building block of powerful and robust applications.",
    description:
      "JavaScript is the little scripting language that could. Once used chiefly to add interactivity to web browser windows, JavaScript is now a primary building block of powerful and robust applications. In this practical book, new and experienced JavaScript developers will learn how to use this language to create APIs as well as web, mobile, and desktop applications. Author and engineering leader Adam D. Scott covers technologies such as Node.js, GraphQL, React, React Native, and Electron. Ideal for developers who want to build full stack applications and ambitious web development beginners looking to bootstrap a startup, this book shows you how to create a single CRUD-style application that will work across several platforms.",
  },
];

describe("Specific book count changing", () => {
  beforeEach(() => {
    store.dispatch(AuthActionCreators.signIn("name"));
    store.dispatch(booksListActionCreators.addBooksToList(books));
    render(
      <MemoryRouter initialEntries={["/books/1"]}>
        <Provider store={store}>
          <Routes>
            <Route path="/books/:id" element={<SpecificBookPage />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  });
  test("Button '+' increase book`s count by 1", () => {
    const input = screen.getByTestId("count value");
    const button = screen.getByTestId("increase by 1");
    for (let value = 1; value < 42; value++) {
      fireEvent.change(input, { target: { value: value } });
      fireEvent.click(button);
      expect(input).toHaveDisplayValue(String(value + 1));
    }
  });
  test("Button '-' decrease book`s count by 1", () => {
    const input = screen.getByTestId("count value");
    const button = screen.getByTestId("decrease by 1");
    for (let value = 2; value <= 42; value++) {
      fireEvent.change(input, { target: { value: value } });
      fireEvent.click(button);
      expect(input).toHaveDisplayValue(String(value - 1));
    }
  });

  test("Changing input value must to change total cost", () => {
    const costField = screen.getByTestId("cost field");

    expect(costField.textContent).not.toBeNull();

    const input = screen.getByTestId("count value");
    const incrementButton = screen.getByTestId("increase by 1");
    const decrementButton = screen.getByTestId("decrease by 1");

    let prevCostValue = parseFloat(String(costField.textContent));
    fireEvent.click(incrementButton);
    let currentCostValue = parseFloat(String(costField.textContent));
    expect(currentCostValue).toBeGreaterThan(prevCostValue);

    prevCostValue = currentCostValue;
    fireEvent.click(decrementButton);
    currentCostValue = parseFloat(String(costField.textContent));
    expect(currentCostValue).toBeLessThan(prevCostValue);

    fireEvent.change(input, { target: { value: 10 } });
    const costBeforeInputChange = parseFloat(String(costField.textContent));
    fireEvent.change(input, { target: { value: 20 } });
    const costAfterInputChange = parseFloat(String(costField.textContent));
    expect(costBeforeInputChange).not.toEqual(costAfterInputChange);
  });
  test("Book count must have minimum value 1", () => {
    const input = screen.getByTestId("count value");
    const decrementButton = screen.getByTestId("decrease by 1");

    fireEvent.change(input, { target: { value: -(Math.random() * 100) } });
    expect(input).toHaveDisplayValue("1");

    fireEvent.click(decrementButton);
    expect(input).toHaveDisplayValue("1");
  });
  test("Book count must have maximum value 1", () => {
    const input = screen.getByTestId("count value");
    const incrementButton = screen.getByTestId("increase by 1");

    fireEvent.change(input, { target: { value: Math.random() * 100 + 42 } });
    expect(input).toHaveDisplayValue("42");

    fireEvent.click(incrementButton);
    expect(input).toHaveDisplayValue("42");
  });

  afterAll(() => {
    store.dispatch(booksListActionCreators.purchaseBookList());
    store.dispatch(AuthActionCreators.signOut());
  });
});

describe("Specific books testing", () => {
  beforeEach(() => {
    store.dispatch(AuthActionCreators.signIn("username"));
    store.dispatch(booksListActionCreators.addBooksToList(books));
  });
  test("Component have to use URI params for getting book`s ID", () => {
    const randomBookIndex = Math.floor(Math.random() * (books.length - 1));
    const randomBook = books[randomBookIndex];
    render(
      <MemoryRouter initialEntries={[`/books/${randomBook.id}`]}>
        <Provider store={store}>
          <Routes>
            <Route path="/books/:id" element={<SpecificBookPage />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const title = screen.getByTestId("title");
    expect(title.textContent).toEqual(randomBook.title);
  });
});
