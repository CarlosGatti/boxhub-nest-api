import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectPhotoCreateOrConnectWithoutProjectInput } from './project-photo-create-or-connect-without-project.input';
import { ProjectPhotoCreateManyProjectInputEnvelope } from './project-photo-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';

@InputType()
export class ProjectPhotoUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ProjectPhotoCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoCreateWithoutProjectInput)
    create?: Array<ProjectPhotoCreateWithoutProjectInput>;

    @Field(() => [ProjectPhotoCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectPhotoCreateOrConnectWithoutProjectInput>;

    @Field(() => ProjectPhotoCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectPhotoCreateManyProjectInputEnvelope)
    createMany?: ProjectPhotoCreateManyProjectInputEnvelope;

    @Field(() => [ProjectPhotoWhereUniqueInput], {nullable:true})
    @Type(() => ProjectPhotoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;
}
