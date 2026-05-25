import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from '../prisma/defined-branding-section-type.enum';

@ObjectType()
export class DefinedBrandingSectionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    brandingProjectId?: number;

    @Field(() => DefinedBrandingSectionType, {nullable:true})
    type?: keyof typeof DefinedBrandingSectionType;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
