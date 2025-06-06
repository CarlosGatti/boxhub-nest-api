import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogScalarWhereInput } from './log-scalar-where.input';
import { Type } from 'class-transformer';
import { LogUpdateManyMutationInput } from './log-update-many-mutation.input';

@InputType()
export class LogUpdateManyWithWhereWithoutUserInput {

    @Field(() => LogScalarWhereInput, {nullable:false})
    @Type(() => LogScalarWhereInput)
    where!: LogScalarWhereInput;

    @Field(() => LogUpdateManyMutationInput, {nullable:false})
    @Type(() => LogUpdateManyMutationInput)
    data!: LogUpdateManyMutationInput;
}
