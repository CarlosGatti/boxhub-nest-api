import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetCreateWithoutCommunityInput } from './facet-create-without-community.input';
import { Type } from 'class-transformer';
import { FacetCreateOrConnectWithoutCommunityInput } from './facet-create-or-connect-without-community.input';
import { FacetUpsertWithWhereUniqueWithoutCommunityInput } from './facet-upsert-with-where-unique-without-community.input';
import { FacetCreateManyCommunityInputEnvelope } from './facet-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { FacetUpdateWithWhereUniqueWithoutCommunityInput } from './facet-update-with-where-unique-without-community.input';
import { FacetUpdateManyWithWhereWithoutCommunityInput } from './facet-update-many-with-where-without-community.input';
import { FacetScalarWhereInput } from './facet-scalar-where.input';

@InputType()
export class FacetUncheckedUpdateManyWithoutCommunityNestedInput {

    @Field(() => [FacetCreateWithoutCommunityInput], {nullable:true})
    @Type(() => FacetCreateWithoutCommunityInput)
    create?: Array<FacetCreateWithoutCommunityInput>;

    @Field(() => [FacetCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => FacetCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<FacetCreateOrConnectWithoutCommunityInput>;

    @Field(() => [FacetUpsertWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => FacetUpsertWithWhereUniqueWithoutCommunityInput)
    upsert?: Array<FacetUpsertWithWhereUniqueWithoutCommunityInput>;

    @Field(() => FacetCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => FacetCreateManyCommunityInputEnvelope)
    createMany?: FacetCreateManyCommunityInputEnvelope;

    @Field(() => [FacetWhereUniqueInput], {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FacetWhereUniqueInput, 'id'>>;

    @Field(() => [FacetWhereUniqueInput], {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FacetWhereUniqueInput, 'id'>>;

    @Field(() => [FacetWhereUniqueInput], {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FacetWhereUniqueInput, 'id'>>;

    @Field(() => [FacetWhereUniqueInput], {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FacetWhereUniqueInput, 'id'>>;

    @Field(() => [FacetUpdateWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => FacetUpdateWithWhereUniqueWithoutCommunityInput)
    update?: Array<FacetUpdateWithWhereUniqueWithoutCommunityInput>;

    @Field(() => [FacetUpdateManyWithWhereWithoutCommunityInput], {nullable:true})
    @Type(() => FacetUpdateManyWithWhereWithoutCommunityInput)
    updateMany?: Array<FacetUpdateManyWithWhereWithoutCommunityInput>;

    @Field(() => [FacetScalarWhereInput], {nullable:true})
    @Type(() => FacetScalarWhereInput)
    deleteMany?: Array<FacetScalarWhereInput>;
}
