# Lazy Project

<!-- Code performed by professionals. Don't try at home! -->
<img src="./src/assets/the_future.jpg" width="300" alt="The World of Tomorrow">

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Build Status](https://travis-ci.org/timbergus/lazy-project.svg?branch=master)](https://travis-ci.org/timbergus/lazy-project)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/33b4fe9bf9364eb1ad905ef83ca85681)](https://www.codacy.com/app/timbergus/lazy-project?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=timbergus/lazy-project&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/timbergus/lazy-project/branch/master/graph/badge.svg)](https://codecov.io/gh/timbergus/lazy-project)

## Introduction

There has been a lot of changes lately in the frontend technology, and because I cannot update all my apps fast enough, I have created this technology template to have the satisfaction of seeing all these new things working 😁

To launch the project in development mode run `npm start`.

To launch the documentation in development mode run `npm run docz:dev`.

To commit your changes using semantic release, use `npm run commit`.

To test in watch mode use `npm run test:jest:watch`.

## The Technology

Here is the cutting-edge technology project base for React. Just check the list!

* __React__ ➨ of course...
* __Lazy Loading__ ➨ because SPA concept is dead, and we cannot send our clients a full app to just check two things per visit.
* __GraphQL__ ➨ because REST is slowly dying and we can replace at the same time Redux and all our verbose APIs.
* __React Router 5__
* __Material UI__ ➨ because developing our CSS framework sometimes is out of scope, and because it's pretty cool.
* __@babel 7__ ➨ because there are soo many cool specs of ES to test...
  * Decorators.
  * Class Properties.
  * Dynamic Import.
  * Optional Chaining (this one is pure magic 😍).
  * And much much more 😁
* __Dotenv__ ➨ because we can replicate the server variables locally and have our scripts cleaner.
* __WebPack__ ➨ because I'm tired of complex configuration processes and I have nothing to demonstrate anymore... yes, [I Google when coding!](https://www.youtube.com/watch?v=LW9pT246LrI).
* __ESLint (Airbnb presets), Sass-Lint, Jest, Enzyme, and Flow__ ➨ because is better to fix errors when you know what the hell are you writing than finding them in code with no comments that it's not even yours.
* __Editor Config__ ➨ no more editor local configurations.
* __Docz__ ➨ because it is the proper mix between descriptive documentation and a component library.

## Lazy Loading

There are a few libraries for lazy loading and the React native technique using Lazy and Suspense, so I have implemented all! One per route in the app.

* __Home Route__ ➨ [React Lazy Loading](https://reactjs.org/docs/code-splitting.html).
* __Users Route__ ➨ [React Universal Component](https://github.com/faceyspacey/react-universal-component).
* __Profile Route__ ➨ [@loadable/component](https://github.com/smooth-code/loadable-components).
* __About Route__ ➨ [React Loadable](https://github.com/jamiebuilds/react-loadable).

The base is similar to all of them, but some are more complete than others and offer different capabilities. So try and choose wisely my friend.

> Before start developing, remove the `delay` in the Home route. This is a tool used just for demonstrative purposes. The idea is to see how in the home page the route component loads (blue loader) and how when it is rendered the data query is activated and loads properly (red loader). And how the data has been cached after the first visit (no more red loader).

## GraphQL

GraphQL is synonymous of Apollo Client. An amazing black box that makes our life easier. But which are its advantages over REST and Redux? And I talk about both because Apollo client offers GraphQL access and local state management, all in one 😲

> __Profile__ route uses decorators to link GraphQL queries and gets the result from the props because it is a new and amazing feature in ES. __About__ route uses Apollo components for queries and mutations.

* __Data Fragmentation__ ➨ No more problems creating huge Redux stores for all our application even though there is no such application mostly if we lazy loading some parts. Each part knows which data needs and ask for it when rendered. The cache grows when while we use the application, and we can mix calls to a GraphQl server with the internal state of our application using `@client` in our queries.
* __Fetch and Store all Together__ ➨ No more having separate tools to fetch and store data. Apollo client fetches the data we need, and store it inside a cache that can be expanded by internal data that does not need to live in our server.
* __Data Specificity__ ➨ No more big amount of data to only pick one or two values. GraphQL allows us to create complex queries mixing a lot of data model and retrieve only the data needed. This reduces the bandwidth with the server drastically and saves data plans for the users in mobile platforms 🤑. Think in responsive sites or progressive web apps.

There are two counters in Profile route and About route. You can change one, and navigate to see the changes in the other. The data handled by the counters is stored in the internal state of the application and shared between them.

> Notice how the data is fetched by the other counter once it is rendered after lazy loading it, and it is no need to do anything weird to let Apollo know that this component needs data or which data.

## Useful Links

* [React State Management In a GraphQL Era - Kitze](https://www.youtube.com/watch?v=Q54YDGC_t3Y)
* [Sara Vieira: State Management in React Apps with Apollo Client – React Kyiv June](https://www.youtube.com/watch?v=7u-6RR_YfdE)
