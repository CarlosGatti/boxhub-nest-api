import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutResponsibleInput } from './project-create-or-connect-without-responsible.input';
import { ProjectUpsertWithWhereUniqueWithoutResponsibleInput } from './project-upsert-with-where-unique-without-responsible.input';
import { ProjectCreateManyResponsibleInputEnvelope } from './project-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutResponsibleInput } from './project-update-with-where-unique-without-responsible.input';
import { ProjectUpdateManyWithWhereWithoutResponsibleInput } from './project-update-many-with-where-without-responsible.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutResponsibleNestedInput {

    @Field(() => [ProjectCreateWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectCreateWithoutResponsibleInput)
    create?: Array<ProjectCreateWithoutResponsibleInput>;

    @Field(() => [ProjectCreateOrConnectWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutResponsibleInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutResponsibleInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutResponsibleInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutResponsibleInput>;

    @Field(() => ProjectCreateManyResponsibleInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyResponsibleInputEnvelope)
    createMany?: ProjectCreateManyResponsibleInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutResponsibleInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutResponsibleInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutResponsibleInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutResponsibleInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
