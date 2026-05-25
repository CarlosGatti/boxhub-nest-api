import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from '../prisma/defined-branding-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateNestedOneWithoutSectionsInput } from '../defined-branding-project/defined-branding-project-create-nested-one-without-sections.input';

@InputType()
export class DefinedBrandingSectionCreateInput {

    @Field(() => DefinedBrandingSectionType, {nullable:false})
    type!: keyof typeof DefinedBrandingSectionType;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedBrandingProjectCreateNestedOneWithoutSectionsInput, {nullable:false})
    brandingProject!: DefinedBrandingProjectCreateNestedOneWithoutSectionsInput;
}
