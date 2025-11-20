// src/upload/upload.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

const createMulterOptions = (folder: string) => ({
  storage: diskStorage({
    destination: `./uploads/${folder}`, // pasta relativa à raiz do projeto
    filename: (req: any, file: Express.Multer["File"], callback: (error: Error | null, filename: string) => void) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  }),
});

@Controller('uploads')
export class UploadControllerInterface {
  @Post('project-documents')
  @UseInterceptors(FileInterceptor('file', createMulterOptions('project-documents')))
  uploadDocument(@UploadedFile() file: Express.Multer["File"]) {
    return {
      url: `/uploads/project-documents/${file.filename}`,
    };
  }

  @Post('project-permits')
  @UseInterceptors(FileInterceptor('file', createMulterOptions('project-permits')))
  uploadPermit(@UploadedFile() file: Express.Multer["File"]) {
    return {
      url: `/uploads/project-permits/${file.filename}`,
    };
  }

  @Post('avatars')
  @UseInterceptors(FileInterceptor('file', createMulterOptions('avatars')))
  uploadAvatar(@UploadedFile() file: Express.Multer["File"]) {
    return {
      url: `/uploads/avatars/${file.filename}`,
    };
  }
}
