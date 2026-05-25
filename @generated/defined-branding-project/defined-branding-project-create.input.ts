import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from '../prisma/defined-branding-project-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedClientCreateNestedOneWithoutBrandingProjectsInput } from '../defined-client/defined-client-create-nested-one-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateNestedOneWithoutBrandingProjectsInput } from '../defined-project/defined-project-create-nested-one-without-branding-projects.input';
import { DefinedBrandingSectionCreateNestedManyWithoutBrandingProjectInput } from '../defined-branding-section/defined-branding-section-create-nested-many-without-branding-project.input';
import { DefinedBrandingAssetCreateNestedManyWithoutBrandingProjectInput } from '../defined-branding-asset/defined-branding-asset-create-nested-many-without-branding-project.input';

@InputType()
export class DefinedBrandingProjectCreateInput {

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

    @Field(() => DefinedClientCreateNestedOneWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedClientCreateNestedOneWithoutBrandingProjectsInput)
    client!: DefinedClientCreateNestedOneWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectCreateNestedOneWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectCreateNestedOneWithoutBrandingProjectsInput)
    project?: DefinedProjectCreateNestedOneWithoutBrandingProjectsInput;

    @Field(() => DefinedBrandingSectionCreateNestedManyWithoutBrandingProjectInput, {nullable:true})
    sections?: DefinedBrandingSectionCreateNestedManyWithoutBrandingProjectInput;

    @Field(() => DefinedBrandingAssetCreateNestedManyWithoutBrandingProjectInput, {nullable:true})
    assets?: DefinedBrandingAssetCreateNestedManyWithoutBrandingProjectInput;
}
