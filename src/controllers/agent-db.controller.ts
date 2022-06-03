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
import {Agent} from '../models';
import {AgentRepository} from '../repositories';

export class AgentDbController {
  constructor(
    @repository(AgentRepository)
    public agentRepository : AgentRepository,
  ) {}

  @post('/agents')
  @response(200, {
    description: 'Agent model instance',
    content: {'application/json': {schema: getModelSchemaRef(Agent)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agent, {
            title: 'NewAgent',
            
          }),
        },
      },
    })
    agent: Agent,
  ): Promise<Agent> {
    return this.agentRepository.create(agent);
  }

  @get('/agents/count')
  @response(200, {
    description: 'Agent model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Agent) where?: Where<Agent>,
  ): Promise<Count> {
    return this.agentRepository.count(where);
  }

  @get('/agents')
  @response(200, {
    description: 'Array of Agent model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Agent, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Agent) filter?: Filter<Agent>,
  ): Promise<Agent[]> {
    return this.agentRepository.find(filter);
  }

  @patch('/agents')
  @response(200, {
    description: 'Agent PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agent, {partial: true}),
        },
      },
    })
    agent: Agent,
    @param.where(Agent) where?: Where<Agent>,
  ): Promise<Count> {
    return this.agentRepository.updateAll(agent, where);
  }

  @get('/agents/{id}')
  @response(200, {
    description: 'Agent model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Agent, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Agent, {exclude: 'where'}) filter?: FilterExcludingWhere<Agent>
  ): Promise<Agent> {
    return this.agentRepository.findById(id, filter);
  }

  @patch('/agents/{id}')
  @response(204, {
    description: 'Agent PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agent, {partial: true}),
        },
      },
    })
    agent: Agent,
  ): Promise<void> {
    await this.agentRepository.updateById(id, agent);
  }

  @put('/agents/{id}')
  @response(204, {
    description: 'Agent PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() agent: Agent,
  ): Promise<void> {
    await this.agentRepository.replaceById(id, agent);
  }

  @del('/agents/{id}')
  @response(204, {
    description: 'Agent DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.agentRepository.deleteById(id);
  }
}
