import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyResourceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    academyId?: number;

    @Field(() => Float, {nullable:true})
    lessonId?: number;

    @Field(() => Float, {nullable:true})
    fileSize?: number;

    @Field(() => Float, {nullable:true})
    sortOrder?: number;

    @Field(() => Float, {nullable:true})
    createdById?: number;
}
