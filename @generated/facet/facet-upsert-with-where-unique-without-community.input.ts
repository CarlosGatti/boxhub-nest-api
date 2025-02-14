import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Type } from 'class-transformer';
import { FacetUpdateWithoutCommunityInput } from './facet-update-without-community.input';
import { FacetCreateWithoutCommunityInput } from './facet-create-without-community.input';

@InputType()
export class FacetUpsertWithWhereUniqueWithoutCommunityInput {

    @Field(() => FacetWhereUniqueInput, {nullable:false})
    @Type(() => FacetWhereUniqueInput)
    where!: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => FacetUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => FacetUpdateWithoutCommunityInput)
    update!: FacetUpdateWithoutCommunityInput;

    @Field(() => FacetCreateWithoutCommunityInput, {nullable:false})
    @Type(() => FacetCreateWithoutCommunityInput)
    create!: FacetCreateWithoutCommunityInput;
}
