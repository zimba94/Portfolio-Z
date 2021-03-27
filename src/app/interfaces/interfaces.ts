
export interface Project{
    id: number,
    image_path: string,
    name: string,
    description: string,
    skills: number[],
    images_paths: string[],
    link: string,
    redirecTo: string
}

export interface Skill{
  id: number,
  image_path: string,
  name: string,
  level: string
}

export interface Email{
  name: string,
  email: string,
  message: string
}