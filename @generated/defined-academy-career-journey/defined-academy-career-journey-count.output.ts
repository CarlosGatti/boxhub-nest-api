import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyCareerJourneyCount {

    @Field(() => Int, {nullable:false})
    stages?: number;

    @Field(() => Int, {nullable:false})
    profiles?: number;
}
