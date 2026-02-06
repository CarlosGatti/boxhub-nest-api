export interface JwtPayload {
  email: string;
  _id: string;
  expiration?: Date;
  apps?: string[]; // Array de códigos de apps que o usuário tem acesso
}
