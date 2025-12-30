import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingCreateInput } from './holding-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHoldingArgs {

    @Field(() => HoldingCreateInput, {nullable:false})
    @Type(() => HoldingCreateInput)
    data!: HoldingCreateInput;
}
