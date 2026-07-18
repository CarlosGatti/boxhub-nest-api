import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralWhereInput } from './defined-academy-referral-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralOrderByWithRelationInput } from './defined-academy-referral-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralScalarFieldEnum } from './defined-academy-referral-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyReferralOrThrowArgs {

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralWhereInput)
    where?: DefinedAcademyReferralWhereInput;

    @Field(() => [DefinedAcademyReferralOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyReferralOrderByWithRelationInput>;

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyReferralScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyReferralScalarFieldEnum>;
}
