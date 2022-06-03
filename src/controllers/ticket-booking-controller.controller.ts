import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TicketBooking} from '../models';
import {TicketBookingRepository} from '../repositories';

export class TicketBookingControllerController {
  constructor(
    @repository(TicketBookingRepository)
    public ticketBookingRepository : TicketBookingRepository,
  ) {}

  @post('/ticketbookings')
  @response(200, {
    description: 'TicketBooking model instance',
    content: {'application/json': {schema: getModelSchemaRef(TicketBooking)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TicketBooking, {
            title: 'NewTicketBooking',
            
          }),
        },
      },
    })
    ticketBooking: TicketBooking,
  ): Promise<TicketBooking> {
    return this.ticketBookingRepository.create(ticketBooking);
  }

  @get('/ticketbookings/count')
  @response(200, {
    description: 'TicketBooking model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TicketBooking) where?: Where<TicketBooking>,
  ): Promise<Count> {
    return this.ticketBookingRepository.count(where);
  }

  @get('/ticketbookings')
  @response(200, {
    description: 'Array of TicketBooking model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TicketBooking, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TicketBooking) filter?: Filter<TicketBooking>,
  ): Promise<TicketBooking[]> {
    return this.ticketBookingRepository.find(filter);
  }

  @patch('/ticketbookings')
  @response(200, {
    description: 'TicketBooking PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TicketBooking, {partial: true}),
        },
      },
    })
    ticketBooking: TicketBooking,
    @param.where(TicketBooking) where?: Where<TicketBooking>,
  ): Promise<Count> {
    return this.ticketBookingRepository.updateAll(ticketBooking, where);
  }

  @get('/ticketbookings/{id}')
  @response(200, {
    description: 'TicketBooking model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TicketBooking, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TicketBooking, {exclude: 'where'}) filter?: FilterExcludingWhere<TicketBooking>
  ): Promise<TicketBooking> {
    return this.ticketBookingRepository.findById(id, filter);
  }

  @patch('/ticketbookings/{id}')
  @response(204, {
    description: 'TicketBooking PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TicketBooking, {partial: true}),
        },
      },
    })
    ticketBooking: TicketBooking,
  ): Promise<void> {
    await this.ticketBookingRepository.updateById(id, ticketBooking);
  }

  @put('/ticketbookings/{id}')
  @response(204, {
    description: 'TicketBooking PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ticketBooking: TicketBooking,
  ): Promise<void> {
    await this.ticketBookingRepository.replaceById(id, ticketBooking);
  }

  @del('/ticketbookings/{id}')
  @response(204, {
    description: 'TicketBooking DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ticketBookingRepository.deleteById(id);
  }
}
