import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemStatus } from './discart-item-status.enum';

@InputType()
export class NestedEnumDiscartItemStatusFilter {

    @Field(() => DiscartItemStatus, {nullable:true})
    equals?: keyof typeof DiscartItemStatus;

    @Field(() => [DiscartItemStatus], {nullable:true})
    in?: Array<keyof typeof DiscartItemStatus>;

    @Field(() => [DiscartItemStatus], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemStatus>;

    @Field(() => NestedEnumDiscartItemStatusFilter, {nullable:true})
    not?: NestedEnumDiscartItemStatusFilter;
}
