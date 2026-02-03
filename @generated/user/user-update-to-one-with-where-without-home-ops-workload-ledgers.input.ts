import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsWorkloadLedgersInput } from './user-update-without-home-ops-workload-ledgers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsWorkloadLedgersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsWorkloadLedgersInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsWorkloadLedgersInput)
    data!: UserUpdateWithoutHomeOpsWorkloadLedgersInput;
}
