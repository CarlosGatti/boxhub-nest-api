import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFacetValueOrThrowArgs {

    @Field(() => FacetValueWhereUniqueInput, {nullable:false})
    @Type(() => FacetValueWhereUniqueInput)
    where!: Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>;
}
