import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutContainersInput } from './family-create-without-containers.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutContainersInput } from './family-create-or-connect-without-containers.input';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';

@InputType()
export class FamilyCreateNestedOneWithoutContainersInput {

    @Field(() => FamilyCreateWithoutContainersInput, {nullable:true})
    @Type(() => FamilyCreateWithoutContainersInput)
    create?: FamilyCreateWithoutContainersInput;

    @Field(() => FamilyCreateOrConnectWithoutContainersInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutContainersInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutContainersInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;
}
