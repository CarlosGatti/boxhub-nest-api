import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyUserCareerProfileCount {

    @Field(() => Int, {nullable:false})
    completions?: number;
}
