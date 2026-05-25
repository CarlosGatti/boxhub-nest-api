import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from '../prisma/defined-branding-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedBrandingProject } from '../defined-branding-project/defined-branding-project.model';

@ObjectType()
export class DefinedBrandingSection {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    brandingProjectId!: number;

    @Field(() => DefinedBrandingSectionType, {nullable:false})
    type!: keyof typeof DefinedBrandingSectionType;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    body!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson!: any | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedBrandingProject, {nullable:false})
    brandingProject?: DefinedBrandingProject;
}
