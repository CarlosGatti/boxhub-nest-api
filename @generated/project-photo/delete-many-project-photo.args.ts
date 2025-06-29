import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoWhereInput } from './project-photo-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProjectPhotoArgs {

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    @Type(() => ProjectPhotoWhereInput)
    where?: ProjectPhotoWhereInput;
}
