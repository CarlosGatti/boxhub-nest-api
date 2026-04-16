import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateManyClientInput } from './defined-project-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProjectCreateManyClientInputEnvelope {

    @Field(() => [DefinedProjectCreateManyClientInput], {nullable:false})
    @Type(() => DefinedProjectCreateManyClientInput)
    data!: Array<DefinedProjectCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
