/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAbout = /* GraphQL */ `
  mutation CreateAbout(
    $input: CreateAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    createAbout(input: $input, condition: $condition) {
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
export const updateAbout = /* GraphQL */ `
  mutation UpdateAbout(
    $input: UpdateAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    updateAbout(input: $input, condition: $condition) {
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
export const deleteAbout = /* GraphQL */ `
  mutation DeleteAbout(
    $input: DeleteAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    deleteAbout(input: $input, condition: $condition) {
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
export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $input: CreateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    createExperience(input: $input, condition: $condition) {
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
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $input: UpdateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    updateExperience(input: $input, condition: $condition) {
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
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $input: DeleteExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    deleteExperience(input: $input, condition: $condition) {
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
export const createWebDevelopment = /* GraphQL */ `
  mutation CreateWebDevelopment(
    $input: CreateWebDevelopmentInput!
    $condition: ModelWebDevelopmentConditionInput
  ) {
    createWebDevelopment(input: $input, condition: $condition) {
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
export const updateWebDevelopment = /* GraphQL */ `
  mutation UpdateWebDevelopment(
    $input: UpdateWebDevelopmentInput!
    $condition: ModelWebDevelopmentConditionInput
  ) {
    updateWebDevelopment(input: $input, condition: $condition) {
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
export const deleteWebDevelopment = /* GraphQL */ `
  mutation DeleteWebDevelopment(
    $input: DeleteWebDevelopmentInput!
    $condition: ModelWebDevelopmentConditionInput
  ) {
    deleteWebDevelopment(input: $input, condition: $condition) {
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
export const createProgrammingProjects = /* GraphQL */ `
  mutation CreateProgrammingProjects(
    $input: CreateProgrammingProjectsInput!
    $condition: ModelProgrammingProjectsConditionInput
  ) {
    createProgrammingProjects(input: $input, condition: $condition) {
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
export const updateProgrammingProjects = /* GraphQL */ `
  mutation UpdateProgrammingProjects(
    $input: UpdateProgrammingProjectsInput!
    $condition: ModelProgrammingProjectsConditionInput
  ) {
    updateProgrammingProjects(input: $input, condition: $condition) {
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
export const deleteProgrammingProjects = /* GraphQL */ `
  mutation DeleteProgrammingProjects(
    $input: DeleteProgrammingProjectsInput!
    $condition: ModelProgrammingProjectsConditionInput
  ) {
    deleteProgrammingProjects(input: $input, condition: $condition) {
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
export const createEngineeringProjects = /* GraphQL */ `
  mutation CreateEngineeringProjects(
    $input: CreateEngineeringProjectsInput!
    $condition: ModelEngineeringProjectsConditionInput
  ) {
    createEngineeringProjects(input: $input, condition: $condition) {
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
export const updateEngineeringProjects = /* GraphQL */ `
  mutation UpdateEngineeringProjects(
    $input: UpdateEngineeringProjectsInput!
    $condition: ModelEngineeringProjectsConditionInput
  ) {
    updateEngineeringProjects(input: $input, condition: $condition) {
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
export const deleteEngineeringProjects = /* GraphQL */ `
  mutation DeleteEngineeringProjects(
    $input: DeleteEngineeringProjectsInput!
    $condition: ModelEngineeringProjectsConditionInput
  ) {
    deleteEngineeringProjects(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createUrl = /* GraphQL */ `
  mutation CreateUrl(
    $input: CreateUrlInput!
    $condition: ModelUrlConditionInput
  ) {
    createUrl(input: $input, condition: $condition) {
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
export const updateUrl = /* GraphQL */ `
  mutation UpdateUrl(
    $input: UpdateUrlInput!
    $condition: ModelUrlConditionInput
  ) {
    updateUrl(input: $input, condition: $condition) {
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
export const deleteUrl = /* GraphQL */ `
  mutation DeleteUrl(
    $input: DeleteUrlInput!
    $condition: ModelUrlConditionInput
  ) {
    deleteUrl(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
