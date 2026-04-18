import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerUpdateWithoutIntakeFormInput } from './defined-intake-answer-update-without-intake-form.input';
import { DefinedIntakeAnswerCreateWithoutIntakeFormInput } from './defined-intake-answer-create-without-intake-form.input';

@InputType()
export class DefinedIntakeAnswerUpsertWithWhereUniqueWithoutIntakeFormInput {

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;

    @Field(() => DefinedIntakeAnswerUpdateWithoutIntakeFormInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerUpdateWithoutIntakeFormInput)
    update!: DefinedIntakeAnswerUpdateWithoutIntakeFormInput;

    @Field(() => DefinedIntakeAnswerCreateWithoutIntakeFormInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerCreateWithoutIntakeFormInput)
    create!: DefinedIntakeAnswerCreateWithoutIntakeFormInput;
}
