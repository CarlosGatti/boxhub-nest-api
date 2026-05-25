import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from '../prisma/defined-branding-project-status.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedBrandingProjectCreateManyClientInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    concept?: string;

    @Field(() => DefinedBrandingProjectStatus, {nullable:true})
    status?: keyof typeof DefinedBrandingProjectStatus;

    @Field(() => Boolean, {nullable:true})
    isPublic?: boolean;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isFeatured?: boolean;

    @Field(() => String, {nullable:true})
    coverImageUrl?: string;

    @Field(() => String, {nullable:true})
    brandManualPdfUrl?: string;

    @Field(() => String, {nullable:true})
    sourcePdfFileName?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
