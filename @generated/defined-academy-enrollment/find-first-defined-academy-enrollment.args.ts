import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentOrderByWithRelationInput } from './defined-academy-enrollment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentScalarFieldEnum } from './defined-academy-enrollment-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyEnrollmentArgs {

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereInput)
    where?: DefinedAcademyEnrollmentWhereInput;

    @Field(() => [DefinedAcademyEnrollmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyEnrollmentOrderByWithRelationInput>;

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyEnrollmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyEnrollmentScalarFieldEnum>;
}
