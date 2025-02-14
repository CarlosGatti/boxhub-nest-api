import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetCreateWithoutCommunityInput } from './facet-create-without-community.input';
import { Type } from 'class-transformer';
import { FacetCreateOrConnectWithoutCommunityInput } from './facet-create-or-connect-without-community.input';
import { FacetCreateManyCommunityInputEnvelope } from './facet-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';

@InputType()
export class FacetUncheckedCreateNestedManyWithoutCommunityInput {

    @Field(() => [FacetCreateWithoutCommunityInput], {nullable:true})
    @Type(() => FacetCreateWithoutCommunityInput)
    create?: Array<FacetCreateWithoutCommunityInput>;

    @Field(() => [FacetCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => FacetCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<FacetCreateOrConnectWithoutCommunityInput>;

    @Field(() => FacetCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => FacetCreateManyCommunityInputEnvelope)
    createMany?: FacetCreateManyCommunityInputEnvelope;

    @Field(() => [FacetWhereUniqueInput], {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FacetWhereUniqueInput, 'id'>>;
}
