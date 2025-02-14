import { ObjectType, Field, InputType } from '@nestjs/graphql';
import {
  CreateUserWithoutPassword,
  CreateUserWithoutPasswordInterface,
} from '../../user/dto/createUser.dto';

interface EventAdressInterface {
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}

interface EventTicketInterface {
  beeped: boolean;
  expire: Date;
  userEmail: string;
}

@ObjectType()
export class EventDetails {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  content: string | null;

  @Field(() => Date, { nullable: false })
  startDate!: Date | string;

  @Field(() => Date, { nullable: false })
  endDate!: Date | string;

  @Field(() => EventAddressGQL, { nullable: true })
  address?: EventAdressInterface;

  @Field(() => String, { nullable: true })
  banner: string | null;

  @Field(() => EventTicketQGL, { nullable: true })
  ticket?: EventTicketInterface;

  @Field(() => Boolean, { nullable: true })
  iAmMember: boolean;
}

@ObjectType()
export class EventAddressGQL {
  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  country?: string;
}

@ObjectType()
export class EventTicketQGL {
  @Field(() => Number, { nullable: true })
  id: number;

  @Field(() => Boolean, { nullable: true })
  beeped: boolean;

  @Field(() => Date, { nullable: true })
  expire: Date;

  @Field(() => String, { nullable: true })
  userEmail: string;
}

@InputType()
export class RegisterUserEvent {
  @Field(() => CreateUserWithoutPassword, { nullable: false })
  user: CreateUserWithoutPasswordInterface;

  @Field(() => Number, { nullable: false })
  communityId: number;

  @Field(() => Number, { nullable: false })
  eventId: number;
}

interface EventTicketInterface {
  id: number;
  beeped: boolean;
  expire: Date;
  userEmail: string;
}
