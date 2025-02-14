import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPublicationArgs {

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;
}
