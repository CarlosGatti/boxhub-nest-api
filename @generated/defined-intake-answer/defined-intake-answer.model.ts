import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from '../prisma/defined-intake-answer-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedIntakeForm } from '../defined-intake-form/defined-intake-form.model';

@ObjectType()
export class DefinedIntakeAnswer {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    intakeFormId!: number;

    @Field(() => String, {nullable:false})
    questionKey!: string;

    @Field(() => String, {nullable:true})
    questionLabel!: string | null;

    @Field(() => DefinedIntakeAnswerType, {nullable:false})
    answerType!: keyof typeof DefinedIntakeAnswerType;

    @Field(() => GraphQLJSON, {nullable:false})
    answerValue!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedIntakeForm, {nullable:false})
    intakeForm?: DefinedIntakeForm;
}
