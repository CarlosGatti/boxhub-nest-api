import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientUpdateWithoutBrandingProjectsInput } from './defined-client-update-without-branding-projects.input';

@InputType()
export class DefinedClientUpdateToOneWithWhereWithoutBrandingProjectsInput {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => DefinedClientUpdateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutBrandingProjectsInput)
    data!: DefinedClientUpdateWithoutBrandingProjectsInput;
}
