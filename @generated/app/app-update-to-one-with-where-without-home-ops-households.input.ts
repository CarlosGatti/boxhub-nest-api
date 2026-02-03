import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';
import { AppUpdateWithoutHomeOpsHouseholdsInput } from './app-update-without-home-ops-households.input';

@InputType()
export class AppUpdateToOneWithWhereWithoutHomeOpsHouseholdsInput {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;

    @Field(() => AppUpdateWithoutHomeOpsHouseholdsInput, {nullable:false})
    @Type(() => AppUpdateWithoutHomeOpsHouseholdsInput)
    data!: AppUpdateWithoutHomeOpsHouseholdsInput;
}
