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
import {ConfirmationMail} from '../models';
import {ConfirmationMailRepository} from '../repositories';

export class ConfirmationDbController {
  constructor(
    @repository(ConfirmationMailRepository)
    public confirmationMailRepository : ConfirmationMailRepository,
  ) {}

  @post('/confirmation-mails')
  @response(200, {
    description: 'ConfirmationMail model instance',
    content: {'application/json': {schema: getModelSchemaRef(ConfirmationMail)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConfirmationMail, {
            title: 'NewConfirmationMail',
            
          }),
        },
      },
    })
    confirmationMail: ConfirmationMail,
  ): Promise<ConfirmationMail> {
    return this.confirmationMailRepository.create(confirmationMail);
  }

  @get('/confirmation-mails/count')
  @response(200, {
    description: 'ConfirmationMail model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ConfirmationMail) where?: Where<ConfirmationMail>,
  ): Promise<Count> {
    return this.confirmationMailRepository.count(where);
  }

  @get('/confirmation-mails')
  @response(200, {
    description: 'Array of ConfirmationMail model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ConfirmationMail, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ConfirmationMail) filter?: Filter<ConfirmationMail>,
  ): Promise<ConfirmationMail[]> {
    return this.confirmationMailRepository.find(filter);
  }

  @patch('/confirmation-mails')
  @response(200, {
    description: 'ConfirmationMail PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConfirmationMail, {partial: true}),
        },
      },
    })
    confirmationMail: ConfirmationMail,
    @param.where(ConfirmationMail) where?: Where<ConfirmationMail>,
  ): Promise<Count> {
    return this.confirmationMailRepository.updateAll(confirmationMail, where);
  }

  @get('/confirmation-mails/{id}')
  @response(200, {
    description: 'ConfirmationMail model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ConfirmationMail, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ConfirmationMail, {exclude: 'where'}) filter?: FilterExcludingWhere<ConfirmationMail>
  ): Promise<ConfirmationMail> {
    return this.confirmationMailRepository.findById(id, filter);
  }

  @patch('/confirmation-mails/{id}')
  @response(204, {
    description: 'ConfirmationMail PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConfirmationMail, {partial: true}),
        },
      },
    })
    confirmationMail: ConfirmationMail,
  ): Promise<void> {
    await this.confirmationMailRepository.updateById(id, confirmationMail);
  }

  @put('/confirmation-mails/{id}')
  @response(204, {
    description: 'ConfirmationMail PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() confirmationMail: ConfirmationMail,
  ): Promise<void> {
    await this.confirmationMailRepository.replaceById(id, confirmationMail);
  }

  @del('/confirmation-mails/{id}')
  @response(204, {
    description: 'ConfirmationMail DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.confirmationMailRepository.deleteById(id);
  }
}
