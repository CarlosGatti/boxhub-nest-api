import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from '../prisma/defined-intake-answer-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedIntakeAnswerCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    intakeFormId!: number;

    @Field(() => String, {nullable:false})
    questionKey!: string;

    @Field(() => String, {nullable:true})
    questionLabel?: string;

    @Field(() => DefinedIntakeAnswerType, {nullable:false})
    answerType!: keyof typeof DefinedIntakeAnswerType;

    @Field(() => GraphQLJSON, {nullable:false})
    answerValue!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
