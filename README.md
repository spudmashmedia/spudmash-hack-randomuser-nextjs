# Random User(s) with NextJS + React

## Getting Started

After cloning, run: 
```
npm install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

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