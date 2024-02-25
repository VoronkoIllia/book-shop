import booksListReducer from "./books-list-reducer";
import { booksListActionCreators } from "./books-list-reducer";

describe("Book-list reducer testing", () => {
  test("Add new books to book-list", () => {
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
      ],
    };
    const newBooks = [
      {
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
      },
      {
        id: 5,
        author: "Stoyan Stefanov",
        price: 14.99,
        image:
          "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@react_up_and_running_2nd_edition.jpg",
        title: "React: Up & Running, 2nd Edition",
        level: "Middle",
        tags: ["core", "frontend", "javascript", "react"],
        amount: 42,
        shortDescription:
          "Hit the ground running with React, the open source technology from Facebook for building rich web applications fast.",
        description:
          "Hit the ground running with React, the open source technology from Facebook for building rich web applications fast. Updated for the latest React release, the second edition of this hands-on guide shows you how to build React components and organize them into maintainable large-scale apps. If you're familiar with JavaScript syntax, you're ready to get started. Through the course of this book, author Stoyan Stefanov helps web developers and programmers build a complete single-page application. You'll quickly learn why some developers consider React the key to the web app development puzzle.",
      },
      {
        id: 6,
        author: "Eric Meyer, Estelle Weyl",
        price: 15.99,
        image:
          "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@css_the_definitive_guide_5th_edition.jpg",
        title: "CSS: The Definitive Guide, 5th Edition",
        level: "Middle",
        tags: ["core", "frontend", "css"],
        amount: 42,
        shortDescription:
          "If you're a web designer or app developer interested in sophisticated page styling, improved accessibility, and less time and effort expended, this book is for you.",
        description:
          "If you're a web designer or app developer interested in sophisticated page styling, improved accessibility, and less time and effort expended, this book is for you. This revised fifth edition provides a comprehensive guide to CSS implementation along with a thorough review of the latest CSS specifications. Authors Eric Meyer and Estelle Weyl show you how to improve user experience, speed development, avoid potential bugs, and add life and depth to your applications through layout, transitions and animations, borders, backgrounds, text properties, and many other tools and techniques.",
      },
    ];
    const expectBooksArrayLength = prevState.books.length + newBooks.length;
    const action = booksListActionCreators.addBooksToList(newBooks);
    const newState = booksListReducer(prevState, action);

    expect(newState.books).toHaveLength(expectBooksArrayLength);
  });
  test("Purchase book-list", () => {
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
      ],
    };
    const action = booksListActionCreators.purchaseBookList();
    const newState = booksListReducer(prevState, action);

    expect(newState.books).toHaveLength(0);
  });
});
