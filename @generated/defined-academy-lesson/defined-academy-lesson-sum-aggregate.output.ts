import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyLessonSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    moduleId?: number;

    @Field(() => Int, {nullable:true})
    videoDurationSeconds?: number;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;
}
