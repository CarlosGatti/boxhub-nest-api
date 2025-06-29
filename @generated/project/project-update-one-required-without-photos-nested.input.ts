import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutPhotosInput } from './project-create-without-photos.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutPhotosInput } from './project-create-or-connect-without-photos.input';
import { ProjectUpsertWithoutPhotosInput } from './project-upsert-without-photos.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutPhotosInput } from './project-update-to-one-with-where-without-photos.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutPhotosNestedInput {

    @Field(() => ProjectCreateWithoutPhotosInput, {nullable:true})
    @Type(() => ProjectCreateWithoutPhotosInput)
    create?: ProjectCreateWithoutPhotosInput;

    @Field(() => ProjectCreateOrConnectWithoutPhotosInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutPhotosInput;

    @Field(() => ProjectUpsertWithoutPhotosInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutPhotosInput)
    upsert?: ProjectUpsertWithoutPhotosInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutPhotosInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutPhotosInput)
    update?: ProjectUpdateToOneWithWhereWithoutPhotosInput;
}
