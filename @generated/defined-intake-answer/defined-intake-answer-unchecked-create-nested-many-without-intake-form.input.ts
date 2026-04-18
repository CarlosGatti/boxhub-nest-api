import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerCreateWithoutIntakeFormInput } from './defined-intake-answer-create-without-intake-form.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput } from './defined-intake-answer-create-or-connect-without-intake-form.input';
import { DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope } from './defined-intake-answer-create-many-intake-form-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';

@InputType()
export class DefinedIntakeAnswerUncheckedCreateNestedManyWithoutIntakeFormInput {

    @Field(() => [DefinedIntakeAnswerCreateWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerCreateWithoutIntakeFormInput)
    create?: Array<DefinedIntakeAnswerCreateWithoutIntakeFormInput>;

    @Field(() => [DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput)
    connectOrCreate?: Array<DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput>;

    @Field(() => DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope, {nullable:true})
    @Type(() => DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope)
    createMany?: DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope;

    @Field(() => [DefinedIntakeAnswerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>>;
}
