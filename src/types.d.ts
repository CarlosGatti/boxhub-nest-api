declare module "bcrypt";
declare module "multer";
declare module "nodemailer";
declare module "passport-jwt";

declare namespace Express {
  interface Multer {
    File: any;
  }
}

