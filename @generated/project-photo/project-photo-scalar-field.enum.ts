import { registerEnumType } from '@nestjs/graphql';

export enum ProjectPhotoScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    caption = "caption",
    category = "category",
    stage = "stage",
    imageUrl = "imageUrl",
    createdAt = "createdAt"
}


registerEnumType(ProjectPhotoScalarFieldEnum, { name: 'ProjectPhotoScalarFieldEnum', description: undefined })
