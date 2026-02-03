import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutHomeOpsHouseholdsInput } from './app-create-without-home-ops-households.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutHomeOpsHouseholdsInput } from './app-create-or-connect-without-home-ops-households.input';
import { AppUpsertWithoutHomeOpsHouseholdsInput } from './app-upsert-without-home-ops-households.input';
import { AppWhereInput } from './app-where.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateToOneWithWhereWithoutHomeOpsHouseholdsInput } from './app-update-to-one-with-where-without-home-ops-households.input';

@InputType()
export class AppUpdateOneWithoutHomeOpsHouseholdsNestedInput {

    @Field(() => AppCreateWithoutHomeOpsHouseholdsInput, {nullable:true})
    @Type(() => AppCreateWithoutHomeOpsHouseholdsInput)
    create?: AppCreateWithoutHomeOpsHouseholdsInput;

    @Field(() => AppCreateOrConnectWithoutHomeOpsHouseholdsInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutHomeOpsHouseholdsInput)
    connectOrCreate?: AppCreateOrConnectWithoutHomeOpsHouseholdsInput;

    @Field(() => AppUpsertWithoutHomeOpsHouseholdsInput, {nullable:true})
    @Type(() => AppUpsertWithoutHomeOpsHouseholdsInput)
    upsert?: AppUpsertWithoutHomeOpsHouseholdsInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    disconnect?: AppWhereInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    delete?: AppWhereInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppUpdateToOneWithWhereWithoutHomeOpsHouseholdsInput, {nullable:true})
    @Type(() => AppUpdateToOneWithWhereWithoutHomeOpsHouseholdsInput)
    update?: AppUpdateToOneWithWhereWithoutHomeOpsHouseholdsInput;
}
