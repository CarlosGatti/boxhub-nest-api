import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutContainersInput } from './family-create-without-containers.input';

@InputType()
export class FamilyCreateOrConnectWithoutContainersInput {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;

    @Field(() => FamilyCreateWithoutContainersInput, {nullable:false})
    @Type(() => FamilyCreateWithoutContainersInput)
    create!: FamilyCreateWithoutContainersInput;
}
