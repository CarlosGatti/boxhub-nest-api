import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetCreateWithoutValuesInput } from './facet-create-without-values.input';
import { Type } from 'class-transformer';
import { FacetCreateOrConnectWithoutValuesInput } from './facet-create-or-connect-without-values.input';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';

@InputType()
export class FacetCreateNestedOneWithoutValuesInput {

    @Field(() => FacetCreateWithoutValuesInput, {nullable:true})
    @Type(() => FacetCreateWithoutValuesInput)
    create?: FacetCreateWithoutValuesInput;

    @Field(() => FacetCreateOrConnectWithoutValuesInput, {nullable:true})
    @Type(() => FacetCreateOrConnectWithoutValuesInput)
    connectOrCreate?: FacetCreateOrConnectWithoutValuesInput;

    @Field(() => FacetWhereUniqueInput, {nullable:true})
    @Type(() => FacetWhereUniqueInput)
    connect?: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;
}
