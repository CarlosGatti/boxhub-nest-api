import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyStatus } from '../prisma/defined-academy-status.enum';

@ObjectType()
export class DefinedAcademyMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    appId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyStatus;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    archivedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
