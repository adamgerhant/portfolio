// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { About, Experience, WebDevelopment, ProgrammingProjects, EngineeringProjects, Project, Url, Article } = initSchema(schema);

export {
  About,
  Experience,
  WebDevelopment,
  ProgrammingProjects,
  EngineeringProjects,
  Project,
  Url,
  Article
};