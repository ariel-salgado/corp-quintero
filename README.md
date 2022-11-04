## Setup

- Upload the `TIT_DB.sql` script file in the prisma folder to your MySQL database.
- Run the command `npx prisma db pull` to get the schema from your database to `schema.prisma`.
- Run the command `npx prisma generate` to sync and get Types based on the database schema.
- Run the command `npm run seed` to compile the `seed.ts` file, which allows to upload mock data to your database to start working on.
- After compiling `seed.ts` a new `seed.js` file will appear, it's the JS transpiled version of the code.
  Change it's extension from `.js` to `.cjs`.
- Run the command `npm run push` to upload the mock data to your database.
- Run the app with `npm run start`.
