import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsWorkloadLedgersInput } from './user-update-without-home-ops-workload-ledgers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsWorkloadLedgersInput } from './user-create-without-home-ops-workload-ledgers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsWorkloadLedgersInput {

    @Field(() => UserUpdateWithoutHomeOpsWorkloadLedgersInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsWorkloadLedgersInput)
    update!: UserUpdateWithoutHomeOpsWorkloadLedgersInput;

    @Field(() => UserCreateWithoutHomeOpsWorkloadLedgersInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsWorkloadLedgersInput)
    create!: UserCreateWithoutHomeOpsWorkloadLedgersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
