import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateWithoutAssetsInput } from './defined-branding-project-create-without-assets.input';

@InputType()
export class DefinedBrandingProjectCreateOrConnectWithoutAssetsInput {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectCreateWithoutAssetsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutAssetsInput)
    create!: DefinedBrandingProjectCreateWithoutAssetsInput;
}
