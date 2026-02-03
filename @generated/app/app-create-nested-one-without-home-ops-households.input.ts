import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutHomeOpsHouseholdsInput } from './app-create-without-home-ops-households.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutHomeOpsHouseholdsInput } from './app-create-or-connect-without-home-ops-households.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutHomeOpsHouseholdsInput {

    @Field(() => AppCreateWithoutHomeOpsHouseholdsInput, {nullable:true})
    @Type(() => AppCreateWithoutHomeOpsHouseholdsInput)
    create?: AppCreateWithoutHomeOpsHouseholdsInput;

    @Field(() => AppCreateOrConnectWithoutHomeOpsHouseholdsInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutHomeOpsHouseholdsInput)
    connectOrCreate?: AppCreateOrConnectWithoutHomeOpsHouseholdsInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;
}
