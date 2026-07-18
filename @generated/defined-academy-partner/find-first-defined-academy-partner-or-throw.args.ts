import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerOrderByWithRelationInput } from './defined-academy-partner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerScalarFieldEnum } from './defined-academy-partner-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyPartnerOrThrowArgs {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;

    @Field(() => [DefinedAcademyPartnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyPartnerOrderByWithRelationInput>;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyPartnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyPartnerScalarFieldEnum>;
}
