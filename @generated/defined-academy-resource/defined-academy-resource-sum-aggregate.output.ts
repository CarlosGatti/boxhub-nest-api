import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyResourceSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => Int, {nullable:true})
    lessonId?: number;

    @Field(() => Int, {nullable:true})
    fileSize?: number;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Int, {nullable:true})
    createdById?: number;
}
