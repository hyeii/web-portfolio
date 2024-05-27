export interface thumbnailType {
  title: string;
  subtitle: string;
  text: string;
  link: string;
  imagesrc: string;
}

interface environmentType {
  backend: string[];
  frontend: string[];
  infra: string[];
}

export interface projectType {
  title: string;
  subtitle: string;
  date: string;
  role: string;
  member: string;
  goal: string;
  environment: environmentType;
  mainfunction: string[];
  myRole: string[];
  after: string[];
  githubLink: string;
}
