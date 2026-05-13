import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutProposalsInput } from './defined-project-create-without-proposals.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutProposalsInput } from './defined-project-create-or-connect-without-proposals.input';
import { DefinedProjectUpsertWithoutProposalsInput } from './defined-project-upsert-without-proposals.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutProposalsInput } from './defined-project-update-to-one-with-where-without-proposals.input';

@InputType()
export class DefinedProjectUpdateOneWithoutProposalsNestedInput {

    @Field(() => DefinedProjectCreateWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutProposalsInput)
    create?: DefinedProjectCreateWithoutProposalsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutProposalsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutProposalsInput;

    @Field(() => DefinedProjectUpsertWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutProposalsInput)
    upsert?: DefinedProjectUpsertWithoutProposalsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    disconnect?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    delete?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutProposalsInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutProposalsInput;
}
