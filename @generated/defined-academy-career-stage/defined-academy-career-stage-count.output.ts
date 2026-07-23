import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyCareerStageCount {

    @Field(() => Int, {nullable:false})
    contentLinks?: number;

    @Field(() => Int, {nullable:false})
    currentProfiles?: number;

    @Field(() => Int, {nullable:false})
    completions?: number;
}
