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
import {TimingTable} from '../models';
import {TimingTableRepository} from '../repositories';

export class TimingTableControllerController {
  constructor(
    @repository(TimingTableRepository)
    public timingTableRepository : TimingTableRepository,
  ) {}

  @post('/timingTables')
  @response(200, {
    description: 'TimingTable model instance',
    content: {'application/json': {schema: getModelSchemaRef(TimingTable)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TimingTable, {
            title: 'NewTimingTable',
            
          }),
        },
      },
    })
    timingTable: TimingTable,
  ): Promise<TimingTable> {
    return this.timingTableRepository.create(timingTable);
  }

  @get('/timingTables/count')
  @response(200, {
    description: 'TimingTable model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TimingTable) where?: Where<TimingTable>,
  ): Promise<Count> {
    return this.timingTableRepository.count(where);
  }

  @get('/timingTables')
  @response(200, {
    description: 'Array of TimingTable model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TimingTable, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TimingTable) filter?: Filter<TimingTable>,
  ): Promise<TimingTable[]> {
    return this.timingTableRepository.find(filter);
  }

  @patch('/timingTables')
  @response(200, {
    description: 'TimingTable PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TimingTable, {partial: true}),
        },
      },
    })
    timingTable: TimingTable,
    @param.where(TimingTable) where?: Where<TimingTable>,
  ): Promise<Count> {
    return this.timingTableRepository.updateAll(timingTable, where);
  }

  @get('/timingTables/{id}')
  @response(200, {
    description: 'TimingTable model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TimingTable, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TimingTable, {exclude: 'where'}) filter?: FilterExcludingWhere<TimingTable>
  ): Promise<TimingTable> {
    return this.timingTableRepository.findById(id, filter);
  }

  @patch('/timingTables/{id}')
  @response(204, {
    description: 'TimingTable PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TimingTable, {partial: true}),
        },
      },
    })
    timingTable: TimingTable,
  ): Promise<void> {
    await this.timingTableRepository.updateById(id, timingTable);
  }

  @put('/timingTables/{id}')
  @response(204, {
    description: 'TimingTable PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() timingTable: TimingTable,
  ): Promise<void> {
    await this.timingTableRepository.replaceById(id, timingTable);
  }

  @del('/timingTables/{id}')
  @response(204, {
    description: 'TimingTable DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.timingTableRepository.deleteById(id);
  }
}
