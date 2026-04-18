import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateWithoutAnswersInput } from './defined-intake-form-create-without-answers.input';

@InputType()
export class DefinedIntakeFormCreateOrConnectWithoutAnswersInput {

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedIntakeFormCreateWithoutAnswersInput, {nullable:false})
    @Type(() => DefinedIntakeFormCreateWithoutAnswersInput)
    create!: DefinedIntakeFormCreateWithoutAnswersInput;
}
