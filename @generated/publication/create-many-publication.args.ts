import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCreateManyInput } from './publication-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPublicationArgs {

    @Field(() => [PublicationCreateManyInput], {nullable:false})
    @Type(() => PublicationCreateManyInput)
    data!: Array<PublicationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
