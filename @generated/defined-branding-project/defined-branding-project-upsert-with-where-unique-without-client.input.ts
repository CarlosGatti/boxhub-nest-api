import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectUpdateWithoutClientInput } from './defined-branding-project-update-without-client.input';
import { DefinedBrandingProjectCreateWithoutClientInput } from './defined-branding-project-create-without-client.input';

@InputType()
export class DefinedBrandingProjectUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectUpdateWithoutClientInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateWithoutClientInput)
    update!: DefinedBrandingProjectUpdateWithoutClientInput;

    @Field(() => DefinedBrandingProjectCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutClientInput)
    create!: DefinedBrandingProjectCreateWithoutClientInput;
}
