import cartReducer, { CartActionCreators } from "./cart-reducer";

const prevState = {
  books: [
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
      count: 3,
      cost: 32.97,
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
      count: 3,
      cost: 95.97,
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
      count: 3,
      cost: 26.97,
    },
  ],
};

describe("Cart reducer", () => {
  test("Add book to cart", () => {
    const newBook = {
      id: 4,
      author: "Alex Banks, Eve Porcello",
      price: 18.99,
      image:
        "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@learning_react_2nd_edition.jpg",
      title: "Learning React, 2nd Edition",
      level: "Beginner",
      tags: ["core", "frontend", "javascript", "react"],
      amount: 42,
      shortDescription:
        "If you want to learn how to build efficient React applications, this is your book.",
      description:
        "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary. With their learning road map, authors Alex Banks and Eve Porcello show you how to create UIs that can deftly display changes without page reloads on large-scale, data-driven websites. You’ll also discover how to work with functional programming and the latest ECMAScript features. Once you learn how to build React components with this hands-on guide, you’ll understand just how useful React can be in your organization.",
    };
    const newBookCount = 4;
    const expectCartBooksArrayLength = prevState.books.length + 1;
    const action = CartActionCreators.addBookToCart(newBook, newBookCount);
    const newState = cartReducer(prevState, action);

    expect(newState.books).toHaveLength(expectCartBooksArrayLength);
  });
  test("Remove book from cart", () => {
    const randomBookIndex = Math.floor(
      Math.random() * (prevState.books.length - 1)
    );
    const testBook = prevState.books[randomBookIndex];
    const action = CartActionCreators.removeBookFromCart(testBook.id);
    const newState = cartReducer(prevState, action);
    const testBookInCart = newState.books.find(
      (book) => book.id === testBook.id
    );

    expect(testBookInCart).toBeUndefined();
  });
  test("Update book`s count value in cart", () => {
    const randomBookIndex = Math.floor(
      Math.random() * (prevState.books.length - 1)
    );
    const testBook = prevState.books[randomBookIndex];
    const randomCount = Math.floor(Math.random() * 41 + 1);

    const action = CartActionCreators.updateSpecificBookCount(
      testBook.id,
      randomCount
    );
    const newState = cartReducer(prevState, action);
    const updateTestBooksCount = newState.books[randomBookIndex].count;
    expect(updateTestBooksCount).toEqual(randomCount);
  });
  test("Purchase cart", () => {
    const action = CartActionCreators.purchaseCart();
    const newState = cartReducer(prevState, action);
    expect(newState.books).toHaveLength(0);
  });
});
