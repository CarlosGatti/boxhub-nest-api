import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsWorkloadLedgersInput } from './user-create-without-home-ops-workload-ledgers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsWorkloadLedgersInput } from './user-create-or-connect-without-home-ops-workload-ledgers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsWorkloadLedgersInput {

    @Field(() => UserCreateWithoutHomeOpsWorkloadLedgersInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsWorkloadLedgersInput)
    create?: UserCreateWithoutHomeOpsWorkloadLedgersInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsWorkloadLedgersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsWorkloadLedgersInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsWorkloadLedgersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
