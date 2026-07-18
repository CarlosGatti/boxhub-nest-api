import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryOrderByWithRelationInput } from './defined-academy-partner-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryScalarFieldEnum } from './defined-academy-partner-category-scalar-field.enum';

@ArgsType()
export class FindManyDefinedAcademyPartnerCategoryArgs {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => [DefinedAcademyPartnerCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyPartnerCategoryOrderByWithRelationInput>;

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyPartnerCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyPartnerCategoryScalarFieldEnum>;
}
