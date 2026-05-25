import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from '../prisma/defined-branding-project-status.enum';

@ObjectType()
export class DefinedBrandingProjectMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
