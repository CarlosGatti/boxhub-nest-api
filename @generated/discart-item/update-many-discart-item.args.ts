import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemUpdateManyMutationInput } from './discart-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DiscartItemWhereInput } from './discart-item-where.input';

@ArgsType()
export class UpdateManyDiscartItemArgs {

    @Field(() => DiscartItemUpdateManyMutationInput, {nullable:false})
    @Type(() => DiscartItemUpdateManyMutationInput)
    data!: DiscartItemUpdateManyMutationInput;

    @Field(() => DiscartItemWhereInput, {nullable:true})
    @Type(() => DiscartItemWhereInput)
    where?: DiscartItemWhereInput;
}
