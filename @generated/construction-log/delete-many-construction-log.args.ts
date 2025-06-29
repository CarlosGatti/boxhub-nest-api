import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyConstructionLogArgs {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;
}
