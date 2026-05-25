import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateInput } from './defined-branding-project-create.input';
import { DefinedBrandingProjectUpdateInput } from './defined-branding-project-update.input';

@ArgsType()
export class UpsertOneDefinedBrandingProjectArgs {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectCreateInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateInput)
    create!: DefinedBrandingProjectCreateInput;

    @Field(() => DefinedBrandingProjectUpdateInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateInput)
    update!: DefinedBrandingProjectUpdateInput;
}
