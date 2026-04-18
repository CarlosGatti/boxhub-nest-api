import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormUpdateWithoutAnswersInput } from './defined-intake-form-update-without-answers.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateWithoutAnswersInput } from './defined-intake-form-create-without-answers.input';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';

@InputType()
export class DefinedIntakeFormUpsertWithoutAnswersInput {

    @Field(() => DefinedIntakeFormUpdateWithoutAnswersInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateWithoutAnswersInput)
    update!: DefinedIntakeFormUpdateWithoutAnswersInput;

    @Field(() => DefinedIntakeFormCreateWithoutAnswersInput, {nullable:false})
    @Type(() => DefinedIntakeFormCreateWithoutAnswersInput)
    create!: DefinedIntakeFormCreateWithoutAnswersInput;

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereInput)
    where?: DefinedIntakeFormWhereInput;
}
