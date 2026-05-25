import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectOrderByWithRelationInput } from './defined-branding-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectScalarFieldEnum } from './defined-branding-project-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedBrandingProjectArgs {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;

    @Field(() => [DefinedBrandingProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingProjectOrderByWithRelationInput>;

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedBrandingProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedBrandingProjectScalarFieldEnum>;
}
