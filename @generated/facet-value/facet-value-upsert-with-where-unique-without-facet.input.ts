import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';
import { Type } from 'class-transformer';
import { FacetValueUpdateWithoutFacetInput } from './facet-value-update-without-facet.input';
import { FacetValueCreateWithoutFacetInput } from './facet-value-create-without-facet.input';

@InputType()
export class FacetValueUpsertWithWhereUniqueWithoutFacetInput {

    @Field(() => FacetValueWhereUniqueInput, {nullable:false})
    @Type(() => FacetValueWhereUniqueInput)
    where!: Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>;

    @Field(() => FacetValueUpdateWithoutFacetInput, {nullable:false})
    @Type(() => FacetValueUpdateWithoutFacetInput)
    update!: FacetValueUpdateWithoutFacetInput;

    @Field(() => FacetValueCreateWithoutFacetInput, {nullable:false})
    @Type(() => FacetValueCreateWithoutFacetInput)
    create!: FacetValueCreateWithoutFacetInput;
}
