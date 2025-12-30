import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingWhereInput } from './holding-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHoldingArgs {

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    where?: HoldingWhereInput;
}
