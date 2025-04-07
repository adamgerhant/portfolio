/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAbout = /* GraphQL */ `
  query GetAbout($id: ID!) {
    getAbout(id: $id) {
      id
      Title
      Portrait {
        id
        icon
        url
        createdAt
        updatedAt
        aboutSocialsId
        experienceImagesId
        projectImagesId
        __typename
      }
      About
      Socials {
        nextToken
        __typename
      }
      Contact
      createdAt
      updatedAt
      aboutPortraitId
      __typename
    }
  }
`;
export const listAbouts = /* GraphQL */ `
  query ListAbouts(
    $filter: ModelAboutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        About
        Contact
        createdAt
        updatedAt
        aboutPortraitId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
      id
      title
      company
      date
      about
      images {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        company
        date
        about
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWebDevelopment = /* GraphQL */ `
  query GetWebDevelopment($id: ID!) {
    getWebDevelopment(id: $id) {
      id
      description
      projects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWebDevelopments = /* GraphQL */ `
  query ListWebDevelopments(
    $filter: ModelWebDevelopmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebDevelopments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgrammingProjects = /* GraphQL */ `
  query GetProgrammingProjects($id: ID!) {
    getProgrammingProjects(id: $id) {
      id
      description
      projects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProgrammingProjects = /* GraphQL */ `
  query ListProgrammingProjects(
    $filter: ModelProgrammingProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgrammingProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEngineeringProjects = /* GraphQL */ `
  query GetEngineeringProjects($id: ID!) {
    getEngineeringProjects(id: $id) {
      id
      description
      projects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEngineeringProjects = /* GraphQL */ `
  query ListEngineeringProjects(
    $filter: ModelEngineeringProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEngineeringProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      url
      about
      images {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      webDevelopmentProjectsId
      programmingProjectsProjectsId
      engineeringProjectsProjectsId
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        about
        createdAt
        updatedAt
        webDevelopmentProjectsId
        programmingProjectsProjectsId
        engineeringProjectsProjectsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUrl = /* GraphQL */ `
  query GetUrl($id: ID!) {
    getUrl(id: $id) {
      id
      icon
      url
      createdAt
      updatedAt
      aboutSocialsId
      experienceImagesId
      projectImagesId
      __typename
    }
  }
`;
export const listUrls = /* GraphQL */ `
  query ListUrls(
    $filter: ModelUrlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        icon
        url
        createdAt
        updatedAt
        aboutSocialsId
        experienceImagesId
        projectImagesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      image {
        id
        icon
        url
        createdAt
        updatedAt
        aboutSocialsId
        experienceImagesId
        projectImagesId
        __typename
      }
      summary
      url
      createdAt
      updatedAt
      articleImageId
      __typename
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        summary
        url
        createdAt
        updatedAt
        articleImageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
