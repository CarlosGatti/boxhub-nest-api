import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateManyClientInput } from './defined-branding-project-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedBrandingProjectCreateManyClientInputEnvelope {

    @Field(() => [DefinedBrandingProjectCreateManyClientInput], {nullable:false})
    @Type(() => DefinedBrandingProjectCreateManyClientInput)
    data!: Array<DefinedBrandingProjectCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
