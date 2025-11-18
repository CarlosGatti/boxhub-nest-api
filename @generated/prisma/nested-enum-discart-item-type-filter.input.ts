import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemType } from './discart-item-type.enum';

@InputType()
export class NestedEnumDiscartItemTypeFilter {

    @Field(() => DiscartItemType, {nullable:true})
    equals?: keyof typeof DiscartItemType;

    @Field(() => [DiscartItemType], {nullable:true})
    in?: Array<keyof typeof DiscartItemType>;

    @Field(() => [DiscartItemType], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemType>;

    @Field(() => NestedEnumDiscartItemTypeFilter, {nullable:true})
    not?: NestedEnumDiscartItemTypeFilter;
}
