import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerUpdateManyMutationInput } from './defined-intake-answer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerWhereInput } from './defined-intake-answer-where.input';

@ArgsType()
export class UpdateManyDefinedIntakeAnswerArgs {

    @Field(() => DefinedIntakeAnswerUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerUpdateManyMutationInput)
    data!: DefinedIntakeAnswerUpdateManyMutationInput;

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereInput)
    where?: DefinedIntakeAnswerWhereInput;
}
