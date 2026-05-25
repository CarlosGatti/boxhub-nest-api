import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionCreateWithoutBrandingProjectInput } from './defined-branding-section-create-without-branding-project.input';

@InputType()
export class DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput {

    @Field(() => DefinedBrandingSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>;

    @Field(() => DefinedBrandingSectionCreateWithoutBrandingProjectInput, {nullable:false})
    @Type(() => DefinedBrandingSectionCreateWithoutBrandingProjectInput)
    create!: DefinedBrandingSectionCreateWithoutBrandingProjectInput;
}
