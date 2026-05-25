import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateWithoutClientInput } from './defined-branding-project-create-without-client.input';

@InputType()
export class DefinedBrandingProjectCreateOrConnectWithoutClientInput {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutClientInput)
    create!: DefinedBrandingProjectCreateWithoutClientInput;
}
