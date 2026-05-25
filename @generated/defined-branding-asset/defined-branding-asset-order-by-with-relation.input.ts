import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedBrandingProjectOrderByWithRelationInput } from '../defined-branding-project/defined-branding-project-order-by-with-relation.input';

@InputType()
export class DefinedBrandingAssetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandingProjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileUrl?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fileName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mimeType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedBrandingProjectOrderByWithRelationInput, {nullable:true})
    brandingProject?: DefinedBrandingProjectOrderByWithRelationInput;
}
