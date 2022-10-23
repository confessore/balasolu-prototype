# base image
FROM debian:bullseye-slim AS base
RUN --mount=type=cache,target=/var/cache/apt apt update && apt install curl -y \
  && curl -sL https://deb.nodesource.com/setup_16.x | bash -\
  && apt install nodejs -y && rm -rf /var/lib/apt/lists/*
WORKDIR /

# builder for nextjs project
FROM base AS builder
COPY ./src/balasolu ./src/balasolu
WORKDIR /src/balasolu
RUN npm i
RUN npm run build --prod


# production for express
FROM base as production
COPY ./src/balasolu ./src/balasolu
COPY --from=builder ./src/balasolu/.next ./src/balasolu/.next
WORKDIR /src/balasolu
CMD ["npm", "run", "start"]