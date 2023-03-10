# API for Salmon Stats+

## Requirements

- Docker
- docker-compose
- nvm
- NodeJS(16.15.0)

## Documents

- [Salmon Stats NW](https://docs.splatnet3.com)

## Configuration

Create `.env` and `.env.local`, `.env.prod` according to the following format.

```.env
PORT=
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
API_VER=
```

### Example

```env
PORT=8080
DATABASE_URL=postgresql://tkgstrator:1234@localhost:5432/splatoon3
POSTGRES_USER=tkgstrator
POSTGRES_PASSWORD=1234
POSTGRES_DB=splatoon3
API_VER=1.0.0
```

## Launch

### Development

```
git clone https://github.com/SalmonStats3/salmonstats-api.git
cd salmonstats-api
make up
yarn install
yarn start:dev
```

### Production

```
git clone https://github.com/SalmonStats3/salmonstats-api.git
cd salmonstats-api
yarn install
yarn start:prod
```
