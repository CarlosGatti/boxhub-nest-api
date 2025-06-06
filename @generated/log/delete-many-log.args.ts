import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLogArgs {

    @Field(() => LogWhereInput, {nullable:true})
    @Type(() => LogWhereInput)
    where?: LogWhereInput;
}
