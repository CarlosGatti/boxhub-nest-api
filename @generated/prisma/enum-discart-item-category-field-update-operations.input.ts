import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCategory } from './discart-item-category.enum';

@InputType()
export class EnumDiscartItemCategoryFieldUpdateOperationsInput {

    @Field(() => DiscartItemCategory, {nullable:true})
    set?: keyof typeof DiscartItemCategory;
}
