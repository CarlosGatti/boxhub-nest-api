import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetCreateWithoutValuesInput } from './facet-create-without-values.input';
import { Type } from 'class-transformer';
import { FacetCreateOrConnectWithoutValuesInput } from './facet-create-or-connect-without-values.input';
import { FacetUpsertWithoutValuesInput } from './facet-upsert-without-values.input';
import { FacetWhereInput } from './facet-where.input';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { FacetUpdateToOneWithWhereWithoutValuesInput } from './facet-update-to-one-with-where-without-values.input';

@InputType()
export class FacetUpdateOneWithoutValuesNestedInput {

    @Field(() => FacetCreateWithoutValuesInput, {nullable:true})
    @Type(() => FacetCreateWithoutValuesInput)
    create?: FacetCreateWithoutValuesInput;

    @Field(() => FacetCreateOrConnectWithoutValuesInput, {nullable:true})
    @Type(() => FacetCreateOrConnectWithoutValuesInput)
    connectOrCreate?: FacetCreateOrConnectWithoutValuesInput;

    @Field(() => FacetUpsertWithoutValuesInput, {nullable:true})
    @Type(() => FacetUpsertWithoutValuesInput)
    upsert?: FacetUpsertWithoutValuesInput;

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    disconnect?: FacetWhereInput;

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    delete?: FacetWhereInput;

    @Field(() => FacetWhereUniqueInput, {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    connect?: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => FacetUpdateToOneWithWhereWithoutValuesInput, {nullable:true})
    @Type(() => FacetUpdateToOneWithWhereWithoutValuesInput)
    update?: FacetUpdateToOneWithWhereWithoutValuesInput;
}
