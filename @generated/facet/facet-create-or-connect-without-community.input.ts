import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Type } from 'class-transformer';
import { FacetCreateWithoutCommunityInput } from './facet-create-without-community.input';

@InputType()
export class FacetCreateOrConnectWithoutCommunityInput {

    @Field(() => FacetWhereUniqueInput, {nullable:false})
    @Type(() => FacetWhereUniqueInput)
    where!: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => FacetCreateWithoutCommunityInput, {nullable:false})
    @Type(() => FacetCreateWithoutCommunityInput)
    create!: FacetCreateWithoutCommunityInput;
}
