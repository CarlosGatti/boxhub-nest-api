import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedClientOrderByWithRelationInput } from '../defined-client/defined-client-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedProjectOrderByWithRelationInput } from '../defined-project/defined-project-order-by-with-relation.input';
import { DefinedBrandingSectionOrderByRelationAggregateInput } from '../defined-branding-section/defined-branding-section-order-by-relation-aggregate.input';
import { DefinedBrandingAssetOrderByRelationAggregateInput } from '../defined-branding-asset/defined-branding-asset-order-by-relation-aggregate.input';

@InputType()
export class DefinedBrandingProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    concept?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isFeatured?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    coverImageUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    brandManualPdfUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sourcePdfFileName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedClientOrderByWithRelationInput, {nullable:true})
    @Type(() => DefinedClientOrderByWithRelationInput)
    client?: DefinedClientOrderByWithRelationInput;

    @Field(() => DefinedProjectOrderByWithRelationInput, {nullable:true})
    @Type(() => DefinedProjectOrderByWithRelationInput)
    project?: DefinedProjectOrderByWithRelationInput;

    @Field(() => DefinedBrandingSectionOrderByRelationAggregateInput, {nullable:true})
    sections?: DefinedBrandingSectionOrderByRelationAggregateInput;

    @Field(() => DefinedBrandingAssetOrderByRelationAggregateInput, {nullable:true})
    assets?: DefinedBrandingAssetOrderByRelationAggregateInput;
}
