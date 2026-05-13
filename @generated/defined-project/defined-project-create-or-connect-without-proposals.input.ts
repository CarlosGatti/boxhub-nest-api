import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutProposalsInput } from './defined-project-create-without-proposals.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutProposalsInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutProposalsInput)
    create!: DefinedProjectCreateWithoutProposalsInput;
}
