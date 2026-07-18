import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyResourceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    academyId?: true;

    @Field(() => Boolean, {nullable:true})
    lessonId?: true;

    @Field(() => Boolean, {nullable:true})
    fileSize?: true;

    @Field(() => Boolean, {nullable:true})
    sortOrder?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;
}
