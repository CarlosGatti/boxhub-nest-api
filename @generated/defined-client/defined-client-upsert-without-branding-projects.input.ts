import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientUpdateWithoutBrandingProjectsInput } from './defined-client-update-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutBrandingProjectsInput } from './defined-client-create-without-branding-projects.input';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientUpsertWithoutBrandingProjectsInput {

    @Field(() => DefinedClientUpdateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutBrandingProjectsInput)
    update!: DefinedClientUpdateWithoutBrandingProjectsInput;

    @Field(() => DefinedClientCreateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutBrandingProjectsInput)
    create!: DefinedClientCreateWithoutBrandingProjectsInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
