import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingUpdateManyMutationInput } from './holding-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HoldingWhereInput } from './holding-where.input';

@ArgsType()
export class UpdateManyHoldingArgs {

    @Field(() => HoldingUpdateManyMutationInput, {nullable:false})
    @Type(() => HoldingUpdateManyMutationInput)
    data!: HoldingUpdateManyMutationInput;

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    where?: HoldingWhereInput;
}
