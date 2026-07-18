import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyLessonCount {

    @Field(() => Int, {nullable:false})
    resources?: number;

    @Field(() => Int, {nullable:false})
    progress?: number;
}
