import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerAbout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<About, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Portrait?: Url | null;
  readonly About: string;
  readonly Socials?: (Url | null)[] | null;
  readonly Contact: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aboutPortraitId?: string | null;
}

type LazyAbout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<About, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Portrait: AsyncItem<Url | undefined>;
  readonly About: string;
  readonly Socials: AsyncCollection<Url>;
  readonly Contact: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aboutPortraitId?: string | null;
}

export declare type About = LazyLoading extends LazyLoadingDisabled ? EagerAbout : LazyAbout

export declare const About: (new (init: ModelInit<About>) => About) & {
  copyOf(source: About, mutator: (draft: MutableModel<About>) => MutableModel<About> | void): About;
}

type EagerExperience = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Experience, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly date: string;
  readonly about: string;
  readonly images?: (Url | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExperience = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Experience, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly date: string;
  readonly about: string;
  readonly images: AsyncCollection<Url>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Experience = LazyLoading extends LazyLoadingDisabled ? EagerExperience : LazyExperience

export declare const Experience: (new (init: ModelInit<Experience>) => Experience) & {
  copyOf(source: Experience, mutator: (draft: MutableModel<Experience>) => MutableModel<Experience> | void): Experience;
}

type EagerWebDevelopment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WebDevelopment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly projects?: (Project | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWebDevelopment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WebDevelopment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly projects: AsyncCollection<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WebDevelopment = LazyLoading extends LazyLoadingDisabled ? EagerWebDevelopment : LazyWebDevelopment

export declare const WebDevelopment: (new (init: ModelInit<WebDevelopment>) => WebDevelopment) & {
  copyOf(source: WebDevelopment, mutator: (draft: MutableModel<WebDevelopment>) => MutableModel<WebDevelopment> | void): WebDevelopment;
}

type EagerProgrammingProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgrammingProjects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly projects?: (Project | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgrammingProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgrammingProjects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly projects: AsyncCollection<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgrammingProjects = LazyLoading extends LazyLoadingDisabled ? EagerProgrammingProjects : LazyProgrammingProjects

export declare const ProgrammingProjects: (new (init: ModelInit<ProgrammingProjects>) => ProgrammingProjects) & {
  copyOf(source: ProgrammingProjects, mutator: (draft: MutableModel<ProgrammingProjects>) => MutableModel<ProgrammingProjects> | void): ProgrammingProjects;
}

type EagerEngineeringProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EngineeringProjects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly projects?: (Project | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEngineeringProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EngineeringProjects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly projects: AsyncCollection<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EngineeringProjects = LazyLoading extends LazyLoadingDisabled ? EagerEngineeringProjects : LazyEngineeringProjects

export declare const EngineeringProjects: (new (init: ModelInit<EngineeringProjects>) => EngineeringProjects) & {
  copyOf(source: EngineeringProjects, mutator: (draft: MutableModel<EngineeringProjects>) => MutableModel<EngineeringProjects> | void): EngineeringProjects;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url?: string | null;
  readonly about: string;
  readonly images?: (Url | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly webDevelopmentProjectsId?: string | null;
  readonly programmingProjectsProjectsId?: string | null;
  readonly engineeringProjectsProjectsId?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url?: string | null;
  readonly about: string;
  readonly images: AsyncCollection<Url>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly webDevelopmentProjectsId?: string | null;
  readonly programmingProjectsProjectsId?: string | null;
  readonly engineeringProjectsProjectsId?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerUrl = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Url, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly icon: string;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aboutSocialsId?: string | null;
  readonly experienceImagesId?: string | null;
  readonly projectImagesId?: string | null;
}

type LazyUrl = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Url, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly icon: string;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aboutSocialsId?: string | null;
  readonly experienceImagesId?: string | null;
  readonly projectImagesId?: string | null;
}

export declare type Url = LazyLoading extends LazyLoadingDisabled ? EagerUrl : LazyUrl

export declare const Url: (new (init: ModelInit<Url>) => Url) & {
  copyOf(source: Url, mutator: (draft: MutableModel<Url>) => MutableModel<Url> | void): Url;
}

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: Url | null;
  readonly summary: string;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly articleImageId?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image: AsyncItem<Url | undefined>;
  readonly summary: string;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly articleImageId?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}