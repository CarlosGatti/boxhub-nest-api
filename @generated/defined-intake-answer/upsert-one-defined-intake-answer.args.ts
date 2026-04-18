import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerCreateInput } from './defined-intake-answer-create.input';
import { DefinedIntakeAnswerUpdateInput } from './defined-intake-answer-update.input';

@ArgsType()
export class UpsertOneDefinedIntakeAnswerArgs {

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;

    @Field(() => DefinedIntakeAnswerCreateInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerCreateInput)
    create!: DefinedIntakeAnswerCreateInput;

    @Field(() => DefinedIntakeAnswerUpdateInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerUpdateInput)
    update!: DefinedIntakeAnswerUpdateInput;
}
