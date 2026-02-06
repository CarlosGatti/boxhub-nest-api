export { };

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_ENV: string;
            DB_HOST: string;
            DB_PORT: number;
            DB_USERNAME: string;
            DB_PASSWORD: string;
            DB_SERVICE_NAME: string;
            DB_TYPE: 'oracle' | 'postgres' | 'mariadb';
            CNPJ_SIGEP: string;
            SMTP_TYPE:
            | 'none'
            | 'file'
            | 'smtp'
            | 'sendmail'
            | 'ses'
            | 'testing'
            | undefined;
            SMTP_HOST: string;
            SMTP_USERNAME: string;
            SMTP_PORT: number;
            SMTP_PASSWORD: string;
            HANDLEBARS_CLIENT_EMAIL: string;
            HANDLEBARS_CLIENT_NAME: string;
            HANDLEBARS_PASSWORD_RESET_URL: string;
        }
    }
}
