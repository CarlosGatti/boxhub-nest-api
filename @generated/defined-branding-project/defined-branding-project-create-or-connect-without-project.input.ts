import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateWithoutProjectInput } from './defined-branding-project-create-without-project.input';

@InputType()
export class DefinedBrandingProjectCreateOrConnectWithoutProjectInput {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutProjectInput)
    create!: DefinedBrandingProjectCreateWithoutProjectInput;
}
