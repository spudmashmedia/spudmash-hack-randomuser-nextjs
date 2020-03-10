# Random User(s) with NextJS + React

## Getting Started

After cloning, run:

```
yarn install
```

To run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build + Deployment

A dockerfile is included, run:

```
sh build.sh
```

OR

```
docker build -t randomusernextjs .
docker run -p 3000:80 -d randomusernextjs
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Tests

Using Jest testing framework.

This will fire off

- unit tests
- snapshot tests
- TODO: integration test

```
yarn test
```

## Open Storybook Component Library

Storybook Component Library

```
yarn storybook
```

