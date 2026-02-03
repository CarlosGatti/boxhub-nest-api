import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsWorkloadLedgersInput } from './user-create-without-home-ops-workload-ledgers.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsWorkloadLedgersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsWorkloadLedgersInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsWorkloadLedgersInput)
    create!: UserCreateWithoutHomeOpsWorkloadLedgersInput;
}
