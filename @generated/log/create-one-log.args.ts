import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCreateInput } from './log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLogArgs {

    @Field(() => LogCreateInput, {nullable:false})
    @Type(() => LogCreateInput)
    data!: LogCreateInput;
}
