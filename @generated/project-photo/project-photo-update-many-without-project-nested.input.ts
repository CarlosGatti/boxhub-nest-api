import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectPhotoCreateOrConnectWithoutProjectInput } from './project-photo-create-or-connect-without-project.input';
import { ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput } from './project-photo-upsert-with-where-unique-without-project.input';
import { ProjectPhotoCreateManyProjectInputEnvelope } from './project-photo-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput } from './project-photo-update-with-where-unique-without-project.input';
import { ProjectPhotoUpdateManyWithWhereWithoutProjectInput } from './project-photo-update-many-with-where-without-project.input';
import { ProjectPhotoScalarWhereInput } from './project-photo-scalar-where.input';

@InputType()
export class ProjectPhotoUpdateManyWithoutProjectNestedInput {

    @Field(() => [ProjectPhotoCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoCreateWithoutProjectInput)
    create?: Array<ProjectPhotoCreateWithoutProjectInput>;

    @Field(() => [ProjectPhotoCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectPhotoCreateOrConnectWithoutProjectInput>;

    @Field(() => [ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ProjectPhotoCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectPhotoCreateManyProjectInputEnvelope)
    createMany?: ProjectPhotoCreateManyProjectInputEnvelope;

    @Field(() => [ProjectPhotoWhereUniqueInput], {nullable:true})
    @Type(() => ProjectPhotoWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectPhotoWhereUniqueInput], {nullable:true})
    @Type(() => ProjectPhotoWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectPhotoWhereUniqueInput], {nullable:true})
    @Type(() => ProjectPhotoWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectPhotoWhereUniqueInput], {nullable:true})
    @Type(() => ProjectPhotoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ProjectPhotoUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ProjectPhotoUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ProjectPhotoUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ProjectPhotoScalarWhereInput], {nullable:true})
    @Type(() => ProjectPhotoScalarWhereInput)
    deleteMany?: Array<ProjectPhotoScalarWhereInput>;
}
