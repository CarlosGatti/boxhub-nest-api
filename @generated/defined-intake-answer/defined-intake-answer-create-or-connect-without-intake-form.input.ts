import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerCreateWithoutIntakeFormInput } from './defined-intake-answer-create-without-intake-form.input';

@InputType()
export class DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput {

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;

    @Field(() => DefinedIntakeAnswerCreateWithoutIntakeFormInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerCreateWithoutIntakeFormInput)
    create!: DefinedIntakeAnswerCreateWithoutIntakeFormInput;
}
