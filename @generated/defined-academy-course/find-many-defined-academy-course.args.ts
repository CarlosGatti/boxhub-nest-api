import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseOrderByWithRelationInput } from './defined-academy-course-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseScalarFieldEnum } from './defined-academy-course-scalar-field.enum';

@ArgsType()
export class FindManyDefinedAcademyCourseArgs {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => [DefinedAcademyCourseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCourseOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyCourseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyCourseScalarFieldEnum>;
}
