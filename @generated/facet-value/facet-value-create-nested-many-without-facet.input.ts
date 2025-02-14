import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetValueCreateWithoutFacetInput } from './facet-value-create-without-facet.input';
import { Type } from 'class-transformer';
import { FacetValueCreateOrConnectWithoutFacetInput } from './facet-value-create-or-connect-without-facet.input';
import { FacetValueCreateManyFacetInputEnvelope } from './facet-value-create-many-facet-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';

@InputType()
export class FacetValueCreateNestedManyWithoutFacetInput {

    @Field(() => [FacetValueCreateWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueCreateWithoutFacetInput)
    create?: Array<FacetValueCreateWithoutFacetInput>;

    @Field(() => [FacetValueCreateOrConnectWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueCreateOrConnectWithoutFacetInput)
    connectOrCreate?: Array<FacetValueCreateOrConnectWithoutFacetInput>;

    @Field(() => FacetValueCreateManyFacetInputEnvelope, {nullable:true})
    @Type(() => FacetValueCreateManyFacetInputEnvelope)
    createMany?: FacetValueCreateManyFacetInputEnvelope;

    @Field(() => [FacetValueWhereUniqueInput], {nullable:true})
    @Type(() => FacetValueWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>>;
}
