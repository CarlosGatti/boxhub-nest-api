import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from '../prisma/defined-academy-partner-status.enum';

@ObjectType()
export class DefinedAcademyPartnerMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    websiteUrl?: string;

    @Field(() => String, {nullable:true})
    contactUrl?: string;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => DefinedAcademyPartnerStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyPartnerStatus;

    @Field(() => Boolean, {nullable:true})
    featured?: boolean;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
