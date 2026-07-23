import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyCareerStageContentAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    stageId?: number;

    @Field(() => Float, {nullable:true})
    courseId?: number;

    @Field(() => Float, {nullable:true})
    resourceId?: number;

    @Field(() => Float, {nullable:true})
    sortOrder?: number;
}
