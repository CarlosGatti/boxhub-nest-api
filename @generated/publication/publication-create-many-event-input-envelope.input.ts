import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateManyEventInput } from './publication-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationCreateManyEventInputEnvelope {

    @Field(() => [PublicationCreateManyEventInput], {nullable:false})
    @Type(() => PublicationCreateManyEventInput)
    data!: Array<PublicationCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
