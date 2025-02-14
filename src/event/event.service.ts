import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { BaseResult } from '../models/base-error.dto';
import { PrismaService } from '../prisma.service';
import { EventDetails, RegisterUserEvent } from './dto/event.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class EventService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async findEventsByUser(currentUser: User) {
    return this.prismaService.event.findMany({
      where: {
        members: {
          some: {
            userId: {
              equals: currentUser.id,
            },
          },
        },
      },
    });
  }

  async findEventsByCommunity(communityId: number) {
    return this.prismaService.event.findMany({
      where: {
        communityId,
      },
      include: {
        publications: {
          include: {
            event: true,
          },
        },
        members: {
          include: {
            user: true,
          },
        },
        tickets: true,
        address: true,
      },
    });
  }

  async findEvent(currentUser: User, eventId: number): Promise<EventDetails> {
    const event = await this.prismaService.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        members: true,
        address: true,
      },
    });

    if (!event) throw new Error('Event not found');

    const iAmMember = event.members.some(
      (member) => member.userId === currentUser.id,
    );

    if (event.visibility !== 'PUBLIC' && !iAmMember)
      throw new Error('You are not a member of this event');

    const ticket = await this.prismaService.eventTicket.findFirst({
      where: {
        AND: {
          eventId,
          userEmail: currentUser.email,
        },
      },
    });

    const { title, content, startDate, endDate, banner } = event;

    let ticketObject = undefined;

    if (ticket) {
      ticketObject = {
        id: ticket?.id,
        beeped: ticket?.beeped,
        expire: ticket?.expire,
        userEmail: ticket?.userEmail,
      };
    }

    return {
      title,
      content,
      startDate,
      endDate,
      banner,
      address: {
        address: event.address?.address,
        city: event.address?.city,
        country: event.address?.country,
        zipCode: event.address?.zipCode,
      },
      ticket: ticketObject,
      iAmMember,
    };
  }

  async joinEvent(currentUser: User, eventId: number): Promise<BaseResult> {
    const event = await this.prismaService.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        members: {
          where: {
            userId: currentUser.id,
          },
        },
      },
    });

    if (event?.members.length)
      return {
        message: 'Você já é membro deste evento',
        success: false,
      };

    try {
      await this.prismaService.eventMember.create({
        data: {
          eventId,
          userId: currentUser.id,
          joinedAt: new Date(),
          status: event?.visibility === 'PUBLIC' ? 'ACCEPTED' : 'PENDING',
        },
      });

      return {
        message: 'Você se tornou membro deste evento',
        success: true,
      };
    } catch {
      return {
        message: 'Não foi possível se tornar membro do evento',
        success: false,
      };
    }
  }

  async createTicket(currentUser: User, eventId: number): Promise<BaseResult> {
    try {
      await this.prismaService.eventTicket.create({
        data: {
          beeped: false,
          expire: new Date(),
          userEmail: currentUser.email,
          eventId,
        },
      });

      return {
        message: 'Ticket criado com sucesso',
        success: true,
      };
    } catch (error) {
      return {
        message: 'Não foi possível criar o ticket',
        success: false,
      };
    }
  }

  async beepTicket(ticketId: number): Promise<BaseResult> {
    try {
      const ticket = await this.prismaService.eventTicket.findUnique({
        where: {
          id: ticketId,
        },
      });

      if (ticket?.beeped)
        return {
          message: '',
          success: false,
        };

      await this.prismaService.eventTicket.update({
        data: {
          beeped: true,
        },
        where: {
          id: ticketId,
        },
      });

      return {
        message: 'Ticket beepado',
        success: true,
      };
    } catch {
      return {
        message: 'Não foi possível beepar o ticket',
        success: false,
      };
    }
  }

  async registerUserEvent(data: RegisterUserEvent): Promise<BaseResult> {
    await this.userService.createUserWithoutPassword(data.user);

    const user = await this.userService.user({
      where: {
        email: data.user.email,
      },
    });

    if (!user) {
      return {
        message: 'Não foi possível criar o usuário',
        success: false,
      };
    }

    await this.prismaService.communityMember.create({
      data: {
        user: {
          connect: {
            email: data.user.email,
          },
        },
        community: {
          connect: {
            id: data.communityId, // TODO - COLOCAR ID DA COMUNIDADE CORRETA
          },
        },
      },
    });

    await this.joinEvent(user, data.eventId);
    await this.createTicket(user, data.eventId);

    return {
      message: 'Foi enviado e-mail para o usuário com a senha',
      success: true,
    };
  }
}
