import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerWhereInput } from './defined-intake-answer-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedIntakeAnswerArgs {

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereInput)
    where?: DefinedIntakeAnswerWhereInput;
}
