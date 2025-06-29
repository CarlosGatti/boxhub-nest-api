import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutPermitsInput } from './project-create-or-connect-without-permits.input';
import { ProjectUpsertWithoutPermitsInput } from './project-upsert-without-permits.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutPermitsInput } from './project-update-to-one-with-where-without-permits.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutPermitsNestedInput {

    @Field(() => ProjectCreateWithoutPermitsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutPermitsInput)
    create?: ProjectCreateWithoutPermitsInput;

    @Field(() => ProjectCreateOrConnectWithoutPermitsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutPermitsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutPermitsInput;

    @Field(() => ProjectUpsertWithoutPermitsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutPermitsInput)
    upsert?: ProjectUpsertWithoutPermitsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutPermitsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutPermitsInput)
    update?: ProjectUpdateToOneWithWhereWithoutPermitsInput;
}
