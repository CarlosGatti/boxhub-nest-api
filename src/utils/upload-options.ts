// utils/upload-options.ts
import { diskStorage } from 'multer';
export const uploadOptions = (folder: string) => ({
  storage: diskStorage({
    destination: `./uploads/${folder}`,
    filename: (_req: any, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) =>
      cb(null, `${Date.now()}-${file.originalname}`),
  }),
  fileFilter: (_req : any, file :any, cb : any) => {
    const ok =
      ['application/pdf', 'image/jpeg', 'image/png'].includes(file.mimetype);
    cb(ok ? null : new Error('Invalid file type'), ok);
  },
});
