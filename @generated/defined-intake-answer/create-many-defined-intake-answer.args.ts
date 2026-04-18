import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerCreateManyInput } from './defined-intake-answer-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedIntakeAnswerArgs {

    @Field(() => [DefinedIntakeAnswerCreateManyInput], {nullable:false})
    @Type(() => DefinedIntakeAnswerCreateManyInput)
    data!: Array<DefinedIntakeAnswerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
