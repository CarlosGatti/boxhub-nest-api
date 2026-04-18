import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDefinedIntakeAnswerArgs {

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;
}
