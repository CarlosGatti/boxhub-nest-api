import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerCreateInput } from './defined-intake-answer-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedIntakeAnswerArgs {

    @Field(() => DefinedIntakeAnswerCreateInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerCreateInput)
    data!: DefinedIntakeAnswerCreateInput;
}
