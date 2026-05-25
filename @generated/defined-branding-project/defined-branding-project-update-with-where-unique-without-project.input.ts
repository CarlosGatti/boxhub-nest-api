import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectUpdateWithoutProjectInput } from './defined-branding-project-update-without-project.input';

@InputType()
export class DefinedBrandingProjectUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateWithoutProjectInput)
    data!: DefinedBrandingProjectUpdateWithoutProjectInput;
}
