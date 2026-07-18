import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyStatus } from '../prisma/defined-academy-status.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedAcademyCreateManyAppInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyStatus;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    archivedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
