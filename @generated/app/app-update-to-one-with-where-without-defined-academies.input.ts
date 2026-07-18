import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';
import { AppUpdateWithoutDefinedAcademiesInput } from './app-update-without-defined-academies.input';

@InputType()
export class AppUpdateToOneWithWhereWithoutDefinedAcademiesInput {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;

    @Field(() => AppUpdateWithoutDefinedAcademiesInput, {nullable:false})
    @Type(() => AppUpdateWithoutDefinedAcademiesInput)
    data!: AppUpdateWithoutDefinedAcademiesInput;
}
