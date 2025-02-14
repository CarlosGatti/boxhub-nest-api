import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutContainersInput } from './family-create-without-containers.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutContainersInput } from './family-create-or-connect-without-containers.input';
import { FamilyUpsertWithoutContainersInput } from './family-upsert-without-containers.input';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { FamilyUpdateToOneWithWhereWithoutContainersInput } from './family-update-to-one-with-where-without-containers.input';

@InputType()
export class FamilyUpdateOneRequiredWithoutContainersNestedInput {

    @Field(() => FamilyCreateWithoutContainersInput, {nullable:true})
    @Type(() => FamilyCreateWithoutContainersInput)
    create?: FamilyCreateWithoutContainersInput;

    @Field(() => FamilyCreateOrConnectWithoutContainersInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutContainersInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutContainersInput;

    @Field(() => FamilyUpsertWithoutContainersInput, {nullable:true})
    @Type(() => FamilyUpsertWithoutContainersInput)
    upsert?: FamilyUpsertWithoutContainersInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;

    @Field(() => FamilyUpdateToOneWithWhereWithoutContainersInput, {nullable:true})
    @Type(() => FamilyUpdateToOneWithWhereWithoutContainersInput)
    update?: FamilyUpdateToOneWithWhereWithoutContainersInput;
}
