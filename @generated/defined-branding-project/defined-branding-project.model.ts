import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from '../prisma/defined-branding-project-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedClient } from '../defined-client/defined-client.model';
import { DefinedProject } from '../defined-project/defined-project.model';
import { DefinedBrandingSection } from '../defined-branding-section/defined-branding-section.model';
import { DefinedBrandingAsset } from '../defined-branding-asset/defined-branding-asset.model';
import { DefinedBrandingProjectCount } from './defined-branding-project-count.output';

@ObjectType()
export class DefinedBrandingProject {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    concept!: string | null;

    @Field(() => DefinedBrandingProjectStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedBrandingProjectStatus;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPublic!: boolean;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isFeatured!: boolean;

    @Field(() => String, {nullable:true})
    coverImageUrl!: string | null;

    @Field(() => String, {nullable:true})
    brandManualPdfUrl!: string | null;

    @Field(() => String, {nullable:true})
    sourcePdfFileName!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedClient, {nullable:false})
    client?: DefinedClient;

    @Field(() => DefinedProject, {nullable:true})
    project?: DefinedProject | null;

    @Field(() => [DefinedBrandingSection], {nullable:true})
    sections?: Array<DefinedBrandingSection>;

    @Field(() => [DefinedBrandingAsset], {nullable:true})
    assets?: Array<DefinedBrandingAsset>;

    @Field(() => DefinedBrandingProjectCount, {nullable:false})
    _count?: DefinedBrandingProjectCount;
}
