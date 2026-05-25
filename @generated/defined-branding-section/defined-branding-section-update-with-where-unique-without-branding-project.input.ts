import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionUpdateWithoutBrandingProjectInput } from './defined-branding-section-update-without-branding-project.input';

@InputType()
export class DefinedBrandingSectionUpdateWithWhereUniqueWithoutBrandingProjectInput {

    @Field(() => DefinedBrandingSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>;

    @Field(() => DefinedBrandingSectionUpdateWithoutBrandingProjectInput, {nullable:false})
    @Type(() => DefinedBrandingSectionUpdateWithoutBrandingProjectInput)
    data!: DefinedBrandingSectionUpdateWithoutBrandingProjectInput;
}
