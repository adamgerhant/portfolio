/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAbout = /* GraphQL */ `
  subscription OnCreateAbout($filter: ModelSubscriptionAboutFilterInput) {
    onCreateAbout(filter: $filter) {
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
export const onUpdateAbout = /* GraphQL */ `
  subscription OnUpdateAbout($filter: ModelSubscriptionAboutFilterInput) {
    onUpdateAbout(filter: $filter) {
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
export const onDeleteAbout = /* GraphQL */ `
  subscription OnDeleteAbout($filter: ModelSubscriptionAboutFilterInput) {
    onDeleteAbout(filter: $filter) {
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
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onCreateExperience(filter: $filter) {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onUpdateExperience(filter: $filter) {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onDeleteExperience(filter: $filter) {
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
export const onCreateWebDevelopment = /* GraphQL */ `
  subscription OnCreateWebDevelopment(
    $filter: ModelSubscriptionWebDevelopmentFilterInput
  ) {
    onCreateWebDevelopment(filter: $filter) {
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
export const onUpdateWebDevelopment = /* GraphQL */ `
  subscription OnUpdateWebDevelopment(
    $filter: ModelSubscriptionWebDevelopmentFilterInput
  ) {
    onUpdateWebDevelopment(filter: $filter) {
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
export const onDeleteWebDevelopment = /* GraphQL */ `
  subscription OnDeleteWebDevelopment(
    $filter: ModelSubscriptionWebDevelopmentFilterInput
  ) {
    onDeleteWebDevelopment(filter: $filter) {
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
export const onCreateProgrammingProjects = /* GraphQL */ `
  subscription OnCreateProgrammingProjects(
    $filter: ModelSubscriptionProgrammingProjectsFilterInput
  ) {
    onCreateProgrammingProjects(filter: $filter) {
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
export const onUpdateProgrammingProjects = /* GraphQL */ `
  subscription OnUpdateProgrammingProjects(
    $filter: ModelSubscriptionProgrammingProjectsFilterInput
  ) {
    onUpdateProgrammingProjects(filter: $filter) {
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
export const onDeleteProgrammingProjects = /* GraphQL */ `
  subscription OnDeleteProgrammingProjects(
    $filter: ModelSubscriptionProgrammingProjectsFilterInput
  ) {
    onDeleteProgrammingProjects(filter: $filter) {
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
export const onCreateEngineeringProjects = /* GraphQL */ `
  subscription OnCreateEngineeringProjects(
    $filter: ModelSubscriptionEngineeringProjectsFilterInput
  ) {
    onCreateEngineeringProjects(filter: $filter) {
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
export const onUpdateEngineeringProjects = /* GraphQL */ `
  subscription OnUpdateEngineeringProjects(
    $filter: ModelSubscriptionEngineeringProjectsFilterInput
  ) {
    onUpdateEngineeringProjects(filter: $filter) {
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
export const onDeleteEngineeringProjects = /* GraphQL */ `
  subscription OnDeleteEngineeringProjects(
    $filter: ModelSubscriptionEngineeringProjectsFilterInput
  ) {
    onDeleteEngineeringProjects(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateUrl = /* GraphQL */ `
  subscription OnCreateUrl($filter: ModelSubscriptionUrlFilterInput) {
    onCreateUrl(filter: $filter) {
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
export const onUpdateUrl = /* GraphQL */ `
  subscription OnUpdateUrl($filter: ModelSubscriptionUrlFilterInput) {
    onUpdateUrl(filter: $filter) {
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
export const onDeleteUrl = /* GraphQL */ `
  subscription OnDeleteUrl($filter: ModelSubscriptionUrlFilterInput) {
    onDeleteUrl(filter: $filter) {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
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
