import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCategory } from './photo-category.enum';

@InputType()
export class NestedEnumPhotoCategoryFilter {

    @Field(() => PhotoCategory, {nullable:true})
    equals?: keyof typeof PhotoCategory;

    @Field(() => [PhotoCategory], {nullable:true})
    in?: Array<keyof typeof PhotoCategory>;

    @Field(() => [PhotoCategory], {nullable:true})
    notIn?: Array<keyof typeof PhotoCategory>;

    @Field(() => NestedEnumPhotoCategoryFilter, {nullable:true})
    not?: NestedEnumPhotoCategoryFilter;
}
