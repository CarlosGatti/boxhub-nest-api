import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerCreateWithoutIntakeFormInput } from './defined-intake-answer-create-without-intake-form.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput } from './defined-intake-answer-create-or-connect-without-intake-form.input';
import { DefinedIntakeAnswerUpsertWithWhereUniqueWithoutIntakeFormInput } from './defined-intake-answer-upsert-with-where-unique-without-intake-form.input';
import { DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope } from './defined-intake-answer-create-many-intake-form-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { DefinedIntakeAnswerUpdateWithWhereUniqueWithoutIntakeFormInput } from './defined-intake-answer-update-with-where-unique-without-intake-form.input';
import { DefinedIntakeAnswerUpdateManyWithWhereWithoutIntakeFormInput } from './defined-intake-answer-update-many-with-where-without-intake-form.input';
import { DefinedIntakeAnswerScalarWhereInput } from './defined-intake-answer-scalar-where.input';

@InputType()
export class DefinedIntakeAnswerUpdateManyWithoutIntakeFormNestedInput {

    @Field(() => [DefinedIntakeAnswerCreateWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerCreateWithoutIntakeFormInput)
    create?: Array<DefinedIntakeAnswerCreateWithoutIntakeFormInput>;

    @Field(() => [DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput)
    connectOrCreate?: Array<DefinedIntakeAnswerCreateOrConnectWithoutIntakeFormInput>;

    @Field(() => [DefinedIntakeAnswerUpsertWithWhereUniqueWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerUpsertWithWhereUniqueWithoutIntakeFormInput)
    upsert?: Array<DefinedIntakeAnswerUpsertWithWhereUniqueWithoutIntakeFormInput>;

    @Field(() => DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope, {nullable:true})
    @Type(() => DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope)
    createMany?: DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope;

    @Field(() => [DefinedIntakeAnswerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedIntakeAnswerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedIntakeAnswerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedIntakeAnswerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedIntakeAnswerUpdateWithWhereUniqueWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerUpdateWithWhereUniqueWithoutIntakeFormInput)
    update?: Array<DefinedIntakeAnswerUpdateWithWhereUniqueWithoutIntakeFormInput>;

    @Field(() => [DefinedIntakeAnswerUpdateManyWithWhereWithoutIntakeFormInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerUpdateManyWithWhereWithoutIntakeFormInput)
    updateMany?: Array<DefinedIntakeAnswerUpdateManyWithWhereWithoutIntakeFormInput>;

    @Field(() => [DefinedIntakeAnswerScalarWhereInput], {nullable:true})
    @Type(() => DefinedIntakeAnswerScalarWhereInput)
    deleteMany?: Array<DefinedIntakeAnswerScalarWhereInput>;
}
