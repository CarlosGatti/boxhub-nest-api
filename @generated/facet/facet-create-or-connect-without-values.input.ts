import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Type } from 'class-transformer';
import { FacetCreateWithoutValuesInput } from './facet-create-without-values.input';

@InputType()
export class FacetCreateOrConnectWithoutValuesInput {

    @Field(() => FacetWhereUniqueInput, {nullable:false})
    @Type(() => FacetWhereUniqueInput)
    where!: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => FacetCreateWithoutValuesInput, {nullable:false})
    @Type(() => FacetCreateWithoutValuesInput)
    create!: FacetCreateWithoutValuesInput;
}
