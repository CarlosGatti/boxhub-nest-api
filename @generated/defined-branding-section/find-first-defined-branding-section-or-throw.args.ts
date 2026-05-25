import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionWhereInput } from './defined-branding-section-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionOrderByWithRelationInput } from './defined-branding-section-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingSectionScalarFieldEnum } from './defined-branding-section-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedBrandingSectionOrThrowArgs {

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    @Type(() => DefinedBrandingSectionWhereInput)
    where?: DefinedBrandingSectionWhereInput;

    @Field(() => [DefinedBrandingSectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingSectionOrderByWithRelationInput>;

    @Field(() => DefinedBrandingSectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedBrandingSectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedBrandingSectionScalarFieldEnum>;
}
