import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerCreateManyIntakeFormInput } from './defined-intake-answer-create-many-intake-form.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedIntakeAnswerCreateManyIntakeFormInputEnvelope {

    @Field(() => [DefinedIntakeAnswerCreateManyIntakeFormInput], {nullable:false})
    @Type(() => DefinedIntakeAnswerCreateManyIntakeFormInput)
    data!: Array<DefinedIntakeAnswerCreateManyIntakeFormInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
