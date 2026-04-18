import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerWhereInput } from './defined-intake-answer-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerOrderByWithRelationInput } from './defined-intake-answer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerScalarFieldEnum } from './defined-intake-answer-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedIntakeAnswerOrThrowArgs {

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereInput)
    where?: DefinedIntakeAnswerWhereInput;

    @Field(() => [DefinedIntakeAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedIntakeAnswerOrderByWithRelationInput>;

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedIntakeAnswerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedIntakeAnswerScalarFieldEnum>;
}
