# Random User(s) with NextJS + React

![random user](docs/img/rndusr-nextjs.gif)

A Next + React SPA app that demonstrates:

- NextJS + React usage
- Next SWR
- React-Spring
- Integration with randomuser.me/api
- Material UI components
- Jest Unit + Snapshot tests
- Babel setup
- ## Storybook Component testing
- Multistage Docker builds

## Prerequisite

Please have the following installed:

| Ref                          | Url                                                     |
| ---------------------------- | ------------------------------------------------------- |
| Node LTS (use nvm) Linux/Mac | https://github.com/nvm-sh/nvm/releases.                 |
| Node LTS (use nvm) Windows   | https://github.com/coreybutler/nvm-windows/releases     |
| yarn                         | https://classic.yarnpkg.com/en/docs/install/#mac-stable |
| docker                       | https://docs.docker.com/install/                        |

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

## References

| Ref                          | Url                                                               |
| ---------------------------- | ----------------------------------------------------------------- |
| Node LTS (use nvm) Linux/Mac | https://github.com/nvm-sh/nvm/releases.                           |
| Node LTS (use nvm) Windows   | https://github.com/coreybutler/nvm-windows/releases               |
| yarn                         | https://classic.yarnpkg.com/en/docs/install/#mac-stable           |
| docker                       | https://docs.docker.com/install/                                  |
| NextJS                       | https://nextjs.org/                                               |
| SWR remote data fetching     | https://github.com/zeit/swr                                       |
| ReactJS                      | https://reactjs.org/                                              |
| Material UI React Components | https://material-ui.com/                                          |
| React Spring                 | https://www.react-spring.io/docs/hooks/use-spring                 |
| Storybook                    | https://storybook.js.org/                                         |
| Storybook a11y addon         | https://github.com/storybookjs/storybook/tree/master/addons/a11y  |
| Storybook knobs addon        | https://github.com/storybookjs/storybook/tree/master/addons/knobs |
| Docker multistage            | https://docs.docker.com/develop/develop-images/multistage-build/  |
