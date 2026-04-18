import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateWithoutAnswersInput } from './defined-intake-form-create-without-answers.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateOrConnectWithoutAnswersInput } from './defined-intake-form-create-or-connect-without-answers.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';

@InputType()
export class DefinedIntakeFormCreateNestedOneWithoutAnswersInput {

    @Field(() => DefinedIntakeFormCreateWithoutAnswersInput, {nullable:true})
    @Type(() => DefinedIntakeFormCreateWithoutAnswersInput)
    create?: DefinedIntakeFormCreateWithoutAnswersInput;

    @Field(() => DefinedIntakeFormCreateOrConnectWithoutAnswersInput, {nullable:true})
    @Type(() => DefinedIntakeFormCreateOrConnectWithoutAnswersInput)
    connectOrCreate?: DefinedIntakeFormCreateOrConnectWithoutAnswersInput;

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;
}
