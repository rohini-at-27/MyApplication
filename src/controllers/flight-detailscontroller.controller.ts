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
import {FlightDetails} from '../models';
import {FlightDetailsRepository} from '../repositories';

export class FlightDetailscontrollerController {
  constructor(
    @repository(FlightDetailsRepository)
    public flightDetailsRepository : FlightDetailsRepository,
  ) {}

  @post('/flightdetails')
  @response(200, {
    description: 'FlightDetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(FlightDetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FlightDetails, {
            title: 'NewFlightDetails',
            
          }),
        },
      },
    })
    flightDetails: FlightDetails,
  ): Promise<FlightDetails> {
    return this.flightDetailsRepository.create(flightDetails);
  }

  @get('/flightdetails/count')
  @response(200, {
    description: 'FlightDetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FlightDetails) where?: Where<FlightDetails>,
  ): Promise<Count> {
    return this.flightDetailsRepository.count(where);
  }

  @get('/flightdetails')
  @response(200, {
    description: 'Array of FlightDetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FlightDetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FlightDetails) filter?: Filter<FlightDetails>,
  ): Promise<FlightDetails[]> {
    return this.flightDetailsRepository.find(filter);
  }

  @patch('/flightdetails')
  @response(200, {
    description: 'FlightDetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FlightDetails, {partial: true}),
        },
      },
    })
    flightDetails: FlightDetails,
    @param.where(FlightDetails) where?: Where<FlightDetails>,
  ): Promise<Count> {
    return this.flightDetailsRepository.updateAll(flightDetails, where);
  }

  @get('/flightdetails/{id}')
  @response(200, {
    description: 'FlightDetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FlightDetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FlightDetails, {exclude: 'where'}) filter?: FilterExcludingWhere<FlightDetails>
  ): Promise<FlightDetails> {
    return this.flightDetailsRepository.findById(id, filter);
  }

  @patch('/flightdetails/{id}')
  @response(204, {
    description: 'FlightDetails PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FlightDetails, {partial: true}),
        },
      },
    })
    flightDetails: FlightDetails,
  ): Promise<void> {
    await this.flightDetailsRepository.updateById(id, flightDetails);
  }

  @put('/flightdetails/{id}')
  @response(204, {
    description: 'FlightDetails PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() flightDetails: FlightDetails,
  ): Promise<void> {
    await this.flightDetailsRepository.replaceById(id, flightDetails);
  }

  @del('/flightdetails/{id}')
  @response(204, {
    description: 'FlightDetails DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.flightDetailsRepository.deleteById(id);
  }
}
