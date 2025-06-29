import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCategory } from './photo-category.enum';

@InputType()
export class EnumPhotoCategoryFieldUpdateOperationsInput {

    @Field(() => PhotoCategory, {nullable:true})
    set?: keyof typeof PhotoCategory;
}
