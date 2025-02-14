import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateManyPostInput } from './publication-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationCreateManyPostInputEnvelope {

    @Field(() => [PublicationCreateManyPostInput], {nullable:false})
    @Type(() => PublicationCreateManyPostInput)
    data!: Array<PublicationCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
