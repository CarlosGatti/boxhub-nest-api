import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateManyProjectInput } from './defined-branding-project-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedBrandingProjectCreateManyProjectInputEnvelope {

    @Field(() => [DefinedBrandingProjectCreateManyProjectInput], {nullable:false})
    @Type(() => DefinedBrandingProjectCreateManyProjectInput)
    data!: Array<DefinedBrandingProjectCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
