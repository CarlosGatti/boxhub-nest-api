import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DefinedInternalNoteAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    clientId?: number;

    @Field(() => Float, {nullable:true})
    projectId?: number;

    @Field(() => Float, {nullable:true})
    authorId?: number;
}
