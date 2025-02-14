import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Type } from 'class-transformer';
import { FacetUpdateWithoutCommunityInput } from './facet-update-without-community.input';

@InputType()
export class FacetUpdateWithWhereUniqueWithoutCommunityInput {

    @Field(() => FacetWhereUniqueInput, {nullable:false})
    @Type(() => FacetWhereUniqueInput)
    where!: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => FacetUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => FacetUpdateWithoutCommunityInput)
    data!: FacetUpdateWithoutCommunityInput;
}
