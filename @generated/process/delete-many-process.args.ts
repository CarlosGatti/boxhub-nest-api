import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProcessArgs {

    @Field(() => ProcessWhereInput, {nullable:true})
    @Type(() => ProcessWhereInput)
    where?: ProcessWhereInput;
}
