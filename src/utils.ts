export const isDev = String(process.env.NODE_ENV)
  .toLowerCase()
  .startsWith("dev");
