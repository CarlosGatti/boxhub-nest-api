import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogUpdateManyMutationInput } from './log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LogWhereInput } from './log-where.input';

@ArgsType()
export class UpdateManyLogArgs {

    @Field(() => LogUpdateManyMutationInput, {nullable:false})
    @Type(() => LogUpdateManyMutationInput)
    data!: LogUpdateManyMutationInput;

    @Field(() => LogWhereInput, {nullable:true})
    @Type(() => LogWhereInput)
    where?: LogWhereInput;
}
