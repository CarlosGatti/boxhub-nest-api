import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkOrderByWithRelationInput } from './defined-academy-short-link-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkScalarFieldEnum } from './defined-academy-short-link-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyShortLinkArgs {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;

    @Field(() => [DefinedAcademyShortLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyShortLinkOrderByWithRelationInput>;

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyShortLinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyShortLinkScalarFieldEnum>;
}
