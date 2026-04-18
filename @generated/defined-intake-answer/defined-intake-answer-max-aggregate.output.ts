import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from '../prisma/defined-intake-answer-type.enum';

@ObjectType()
export class DefinedIntakeAnswerMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    intakeFormId?: number;

    @Field(() => String, {nullable:true})
    questionKey?: string;

    @Field(() => String, {nullable:true})
    questionLabel?: string;

    @Field(() => DefinedIntakeAnswerType, {nullable:true})
    answerType?: keyof typeof DefinedIntakeAnswerType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
