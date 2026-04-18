import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormUpdateWithoutAnswersInput } from './defined-intake-form-update-without-answers.input';

@InputType()
export class DefinedIntakeFormUpdateToOneWithWhereWithoutAnswersInput {

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereInput)
    where?: DefinedIntakeFormWhereInput;

    @Field(() => DefinedIntakeFormUpdateWithoutAnswersInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateWithoutAnswersInput)
    data!: DefinedIntakeFormUpdateWithoutAnswersInput;
}
