import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutBrandingProjectsInput } from './defined-client-create-without-branding-projects.input';

@InputType()
export class DefinedClientCreateOrConnectWithoutBrandingProjectsInput {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutBrandingProjectsInput)
    create!: DefinedClientCreateWithoutBrandingProjectsInput;
}
