import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyOrderByWithRelationInput } from './defined-academy-career-journey-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyScalarFieldEnum } from './defined-academy-career-journey-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyCareerJourneyOrThrowArgs {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => [DefinedAcademyCareerJourneyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerJourneyOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyCareerJourneyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyCareerJourneyScalarFieldEnum>;
}
