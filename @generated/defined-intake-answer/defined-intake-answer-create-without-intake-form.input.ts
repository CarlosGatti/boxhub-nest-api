import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from '../prisma/defined-intake-answer-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedIntakeAnswerCreateWithoutIntakeFormInput {

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
