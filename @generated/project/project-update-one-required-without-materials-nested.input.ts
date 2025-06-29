import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutMaterialsInput } from './project-create-without-materials.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutMaterialsInput } from './project-create-or-connect-without-materials.input';
import { ProjectUpsertWithoutMaterialsInput } from './project-upsert-without-materials.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutMaterialsInput } from './project-update-to-one-with-where-without-materials.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutMaterialsNestedInput {

    @Field(() => ProjectCreateWithoutMaterialsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutMaterialsInput)
    create?: ProjectCreateWithoutMaterialsInput;

    @Field(() => ProjectCreateOrConnectWithoutMaterialsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutMaterialsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput;

    @Field(() => ProjectUpsertWithoutMaterialsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutMaterialsInput)
    upsert?: ProjectUpsertWithoutMaterialsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutMaterialsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutMaterialsInput)
    update?: ProjectUpdateToOneWithWhereWithoutMaterialsInput;
}
