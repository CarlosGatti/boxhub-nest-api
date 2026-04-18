import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateWithoutAnswersInput } from './defined-intake-form-create-without-answers.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateOrConnectWithoutAnswersInput } from './defined-intake-form-create-or-connect-without-answers.input';
import { DefinedIntakeFormUpsertWithoutAnswersInput } from './defined-intake-form-upsert-without-answers.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { DefinedIntakeFormUpdateToOneWithWhereWithoutAnswersInput } from './defined-intake-form-update-to-one-with-where-without-answers.input';

@InputType()
export class DefinedIntakeFormUpdateOneRequiredWithoutAnswersNestedInput {

    @Field(() => DefinedIntakeFormCreateWithoutAnswersInput, {nullable:true})
    @Type(() => DefinedIntakeFormCreateWithoutAnswersInput)
    create?: DefinedIntakeFormCreateWithoutAnswersInput;

    @Field(() => DefinedIntakeFormCreateOrConnectWithoutAnswersInput, {nullable:true})
    @Type(() => DefinedIntakeFormCreateOrConnectWithoutAnswersInput)
    connectOrCreate?: DefinedIntakeFormCreateOrConnectWithoutAnswersInput;

    @Field(() => DefinedIntakeFormUpsertWithoutAnswersInput, {nullable:true})
    @Type(() => DefinedIntakeFormUpsertWithoutAnswersInput)
    upsert?: DefinedIntakeFormUpsertWithoutAnswersInput;

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedIntakeFormUpdateToOneWithWhereWithoutAnswersInput, {nullable:true})
    @Type(() => DefinedIntakeFormUpdateToOneWithWhereWithoutAnswersInput)
    update?: DefinedIntakeFormUpdateToOneWithWhereWithoutAnswersInput;
}
