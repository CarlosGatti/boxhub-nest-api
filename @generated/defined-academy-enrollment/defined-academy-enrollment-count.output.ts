import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyEnrollmentCount {

    @Field(() => Int, {nullable:false})
    progress?: number;
}
