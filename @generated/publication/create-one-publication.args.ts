import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCreateInput } from './publication-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePublicationArgs {

    @Field(() => PublicationCreateInput, {nullable:false})
    @Type(() => PublicationCreateInput)
    data!: PublicationCreateInput;
}
