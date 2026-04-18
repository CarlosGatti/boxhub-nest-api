import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedIntakeAnswerCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    intakeFormId!: number;

    @Field(() => Int, {nullable:false})
    questionKey!: number;

    @Field(() => Int, {nullable:false})
    questionLabel!: number;

    @Field(() => Int, {nullable:false})
    answerType!: number;

    @Field(() => Int, {nullable:false})
    answerValue!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
