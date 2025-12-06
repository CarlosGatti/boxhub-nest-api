import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppArgs {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;
}
