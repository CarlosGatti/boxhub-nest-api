import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutProposalsInput } from './defined-project-create-without-proposals.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutProposalsInput } from './defined-project-create-or-connect-without-proposals.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutProposalsInput {

    @Field(() => DefinedProjectCreateWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutProposalsInput)
    create?: DefinedProjectCreateWithoutProposalsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutProposalsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutProposalsInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
