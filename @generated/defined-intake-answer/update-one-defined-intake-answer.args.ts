import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerUpdateInput } from './defined-intake-answer-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';

@ArgsType()
export class UpdateOneDefinedIntakeAnswerArgs {

    @Field(() => DefinedIntakeAnswerUpdateInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerUpdateInput)
    data!: DefinedIntakeAnswerUpdateInput;

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;
}
