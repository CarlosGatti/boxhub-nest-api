import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedClientArgs {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
