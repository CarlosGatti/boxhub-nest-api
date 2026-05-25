import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectUpdateInput } from './defined-branding-project-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';

@ArgsType()
export class UpdateOneDefinedBrandingProjectArgs {

    @Field(() => DefinedBrandingProjectUpdateInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateInput)
    data!: DefinedBrandingProjectUpdateInput;

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;
}
