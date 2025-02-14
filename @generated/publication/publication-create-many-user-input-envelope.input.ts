import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateManyUserInput } from './publication-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationCreateManyUserInputEnvelope {

    @Field(() => [PublicationCreateManyUserInput], {nullable:false})
    @Type(() => PublicationCreateManyUserInput)
    data!: Array<PublicationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
