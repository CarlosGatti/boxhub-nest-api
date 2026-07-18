import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutDefinedAcademiesInput } from './app-create-without-defined-academies.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutDefinedAcademiesInput } from './app-create-or-connect-without-defined-academies.input';
import { AppUpsertWithoutDefinedAcademiesInput } from './app-upsert-without-defined-academies.input';
import { AppWhereInput } from './app-where.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateToOneWithWhereWithoutDefinedAcademiesInput } from './app-update-to-one-with-where-without-defined-academies.input';

@InputType()
export class AppUpdateOneWithoutDefinedAcademiesNestedInput {

    @Field(() => AppCreateWithoutDefinedAcademiesInput, {nullable:true})
    @Type(() => AppCreateWithoutDefinedAcademiesInput)
    create?: AppCreateWithoutDefinedAcademiesInput;

    @Field(() => AppCreateOrConnectWithoutDefinedAcademiesInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutDefinedAcademiesInput)
    connectOrCreate?: AppCreateOrConnectWithoutDefinedAcademiesInput;

    @Field(() => AppUpsertWithoutDefinedAcademiesInput, {nullable:true})
    @Type(() => AppUpsertWithoutDefinedAcademiesInput)
    upsert?: AppUpsertWithoutDefinedAcademiesInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    disconnect?: AppWhereInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    delete?: AppWhereInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppUpdateToOneWithWhereWithoutDefinedAcademiesInput, {nullable:true})
    @Type(() => AppUpdateToOneWithWhereWithoutDefinedAcademiesInput)
    update?: AppUpdateToOneWithWhereWithoutDefinedAcademiesInput;
}
